import React from "react";
import { weatherdata } from "@/data/weatherdata";
import Image from "next/image";
import { TbTemperatureCelsius, TbTemperatureFahrenheit } from "react-icons/tb";

function TodayWeather({ date, location, day }) {
  return (
    <div className=" my-5 border w-[300px] md:w-[800px] shadow-2xl bg-slate-600 text-slate-200 rounded-3xl">
      <div className="flex flex-row m-5 justify-between">
        <div className="flex flex-col md:flex-row">
          {location.name}, {location.region}, {location.country}
        </div>
        <div className="flex flex-col md:flex-row text-right">
          {date} {location.tz_id}
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:gap-10 m-5">
        <div className="flex flex-row md:w-full gap-20 my-4">
          <div className="flex flex-col">
            <span>Avg Temp</span>
            <span className="flex flex-row text-xl font-bold justify-center items-center">
              {day.avgtemp_c}
              <TbTemperatureCelsius size={20} />/{day.avgtemp_f}
              <TbTemperatureFahrenheit size={20} />
            </span>
          </div>
          <div className="flex flex-col ">
            <span>Avg Humidity</span>
            <span className="text-xl font-bold text-center">
              {day.avghumidity}
            </span>
          </div>
        </div>
        <div className="flex flex-row md:w-full gap-20 my-4">
          <div className="flex flex-col">
            <span>Raining Chances</span>
            <span className="text-xl font-bold text-center">
              {day.daily_chance_of_rain}%
            </span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span> {day.condition.text}</span>
            <Image
              src={`https:${day.condition.icon}`}
              alt={day.condition.text}
              width={50}
              height={50}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodayWeather;
