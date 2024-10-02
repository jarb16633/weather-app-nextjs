import moment from "moment";

export const kelvinToCelsius = (kelvin: number) => {
  return Math.round(kelvin - 273.15);
};

export const unixToDay = (unix: number) => {
  return moment.unix(unix).format("ddd");
};

export const airQualityIndexText = [
  {
    rating: 1,
    text: "Good",
    description:
      "Air quality is considered satisfactory, and air pollution poses little or no risk.",
  },
  {
    rating: 2,
    text: "Fair",
    description:
      "Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.",
  },
  {
    rating: 3,
    text: "Moderate",
    description:
      "Members of sensitive groups may experience health effects. The general public is not likely to be affected.",
  },
  {
    rating: 4,
    text: "Poor",
    description:
      "Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects.",
  },
  {
    rating: 5,
    text: "Very Poor",
    description:
      "Health warnings of emergency conditions. The entire population is more likely to be affected.",
  },
];

export function evaluateAirQuality(aqi: number) {
  if (aqi >= 1 && aqi <= 5) {
    return airQualityIndexText[aqi - 1];
  } else {
    throw new Error("Invalid AQI value. It should be between 1 and 5.");
  }
}
