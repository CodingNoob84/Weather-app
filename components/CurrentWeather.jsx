import React from "react";
import { weatherdata } from "@/data/weatherdata";
import Image from "next/image";
import { TbTemperatureCelsius, TbTemperatureFahrenheit } from "react-icons/tb";

function CurrentWeather() {
  return (
    <div className=" my-5 border w-[800px] shadow-2xl bg-slate-200">
      <div className="flex flex-row m-5 justify-between">
        <div>
          {weatherdata.location.name}-{weatherdata.location.region}-
          {weatherdata.location.country}
        </div>
        <div>
          {weatherdata.location.localtime}- {weatherdata.location.tz_id}
        </div>
      </div>
      <div className="flex flex-row m-5 justify-between">
        <div className="flex flex-col">
          <span>Current Temp</span>
          <span className="flex flex-row text-xl font-bold justify-center items-center">
            {weatherdata.current.temp_c}
            <TbTemperatureCelsius size={20} />/{weatherdata.current.temp_f}
            <TbTemperatureFahrenheit size={20} />
          </span>
        </div>
        <div className="flex flex-col">
          <span>RealFeel Temp C/F</span>
          <span className="text-xl font-bold text-center">
            {weatherdata.current.feelslike_c}/{weatherdata.current.feelslike_f}
          </span>
        </div>
        <div className="flex flex-col">
          <span>Humidity</span>
          <span className="text-xl font-bold text-center">
            {weatherdata.current.humidity}
          </span>
        </div>
        <div className="flex flex-col justify-center">
          <span> {weatherdata.current.condition.text}</span>
          <Image
            src={`https:${weatherdata.current.condition.icon}`}
            alt={weatherdata.current.condition.text}
            width={50}
            height={50}
          />
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
