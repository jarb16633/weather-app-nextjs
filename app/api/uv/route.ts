import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const lat = 40.4165;
    const lon = -3.7026;

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=uv_index_max,uv_index_clear_sky_max&timezone=auto&forecast_days=1`;
    const res = await fetch(url, {
      next: { revalidate: 900 },
    });

    const uvData = await res.json();

    return NextResponse.json(uvData);
  } catch (error) {
    console.log("Error fetching uv data:", error);
    return new NextResponse("Error fetching uv data", { status: 500 });
  }
}
