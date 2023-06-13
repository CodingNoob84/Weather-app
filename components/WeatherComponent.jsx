"use client";
import { weatherdata } from "@/data/weatherdata";
import React from "react";
import TodayWeather from "./TodayWeather";
import HourlyWeather from "./HourlyWeather";

function WeatherComponent({ weatherData }) {
  const { location, current, forecast } = weatherData;
  const { date, day, astro, hour } = forecast.forecastday[0];
  console.log(date);
  return (
    <>
      <TodayWeather date={date} location={location} day={day} />
      <HourlyWeather hour={hour} />
    </>
  );
}

export default WeatherComponent;
