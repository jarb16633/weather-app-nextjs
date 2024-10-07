# Next.js Weather Application

This is a modern weather application built with Next.js, TypeScript, and Tailwind CSS. It provides real-time weather information, forecasts, and air quality data for various locations.

## Features

- Current weather conditions
- 5-day weather forecast
- Air pollution information
- Sunset and sunrise times
- Wind speed and direction
- Dark mode support
- Responsive design

## Technologies Used

- Next.js 14
- TypeScript
- Tailwind CSS
- OpenWeatherMap API
- Axios for API requests
- Moment.js for date/time handling
- Radix UI for accessible components
- Lucide React for icons

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/weather-app-nextjs.git
   ```

2. Navigate to the project directory:

   ```bash
   cd weather-app-nextjs
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

4. Create a `.env.local` file in the root directory and add your OpenWeatherMap API key:

   ```bash
   OPENWEATHERMAP_API_KEY=your_api_key_here
   ```

5. Run the development server:

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/`: Contains the main application code
  - `api/`: API routes for weather, pollution, and forecast data
  - `context/`: Global context for state management
  - `layout.tsx`: Root layout component
  - `page.tsx`: Main page component
- `components/`: Reusable React components
- `lib/`: Utility functions and helpers
- `public/`: Static assets
- `utils/`: Miscellaneous utility functions and constants

## Key Components

- `Temperature`: Displays current temperature and weather conditions
- `FiveDayForecast`: Shows a 5-day weather forecast
- `AirPollution`: Presents air quality information
- `Sunset`: Displays sunset and sunrise times
- `Wind`: Shows wind speed and direction
- `SearchDialog`: Allows users to search for different locations

## Styling

The project uses Tailwind CSS for styling, with a custom theme defined in `tailwind.config.ts`. Dark mode is supported and can be toggled using the `ModeToggle` component.

## API Integration

Weather data is fetched from the OpenWeatherMap API using server-side API routes located in the `app/api/` directory. This approach helps keep the API key secure.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
