"use client";
import SearchLocation from "@/components/SearchLocation";
import { useEffect, useState } from "react";
import WeatherComponent from "@/components/WeatherComponent";
import { getWeather } from "@/Lib/services";

export default function Home() {
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      if (cityName) {
        const data = await getWeather(cityName);
        setWeatherData(data);
        // Handle the fetched data
      } else {
        setWeatherData(null);
      }
    };

    fetchData();
  }, [cityName]);
  console.log(cityName);
  return (
    <main className="flex min-h-screen flex-col items-center p-16">
      <div className="text-2xl font-bold">Weather App</div>
      <SearchLocation setCityName={setCityName} />
      {weatherData && <WeatherComponent weatherData={weatherData} />}
    </main>
  );
}
