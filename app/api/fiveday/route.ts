import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const apiKey = process.env.OPENWEATHERMAP_API_KEY;
    // const searchParams = req.nextUrl.searchParams;

    const lat = 40.4165;
    const lon = -3.7026;

    const dailyUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    const dailyRes = await fetch(dailyUrl, {
      next: { revalidate: 3600 },
    });
    const dailyData = await dailyRes.json();

    return NextResponse.json(dailyData);
  } catch (error) {
    console.log("Error fetching five day forcast data: ", error);
    return new NextResponse("Error fetching five day forcast data", {
      status: 500,
    });
  }
}
