"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { TbTemperatureCelsius, TbTemperatureFahrenheit } from "react-icons/tb";

function HourlyWeather({ hour }) {
  const [selectRow, setSelectRow] = useState();
  const handleSelectRow = (val) => {
    if (val == selectRow) {
      setSelectRow(null);
    } else {
      setSelectRow(val);
    }
  };
  return (
    <div className="my-5 border w-[400px] md:w-[800px] shadow-2xl bg-slate-500 text-slate-200 rounded-2xl">
      <table className="w-full">
        <thead>
          <tr>
            <th>Date-Time</th>
            <th>Weather Condition</th>
            <th>Raining Chances</th>
          </tr>
        </thead>
        <tbody>
          {hour.map((hourly, i) => (
            <React.Fragment key={i}>
              <tr
                className={` border-slate-400 cursor-pointer hover:bg-slate-400 ${
                  selectRow === i ? "" : "border-b"
                }`}
                onClick={() => handleSelectRow(i)}
              >
                <td className="text-center flex flex-row justify-center">
                  {selectRow === i ? (
                    <MdOutlineKeyboardArrowUp size={30} />
                  ) : (
                    <MdOutlineKeyboardArrowDown size={30} />
                  )}{" "}
                  {hourly.time}
                </td>
                <td className="text-center">{hourly.condition.text}</td>
                <td className="text-center">{hourly.chance_of_rain}%</td>
              </tr>
              {selectRow === i && (
                <tr>
                  <td colSpan={3} className="text-center">
                    <div className="flex flex-col md:flex-row md:gap-10 ">
                      <div className="flex flex-row md:w-full gap-[30px] my-4">
                        <div className="flex flex-col w-[170px]">
                          <span>Current Temp</span>
                          <span className="flex flex-row text-xl font-bold justify-center items-center">
                            {hourly.temp_c}
                            <TbTemperatureCelsius size={20} />/{hourly.temp_f}
                            <TbTemperatureFahrenheit size={20} />
                          </span>
                        </div>
                        <div className="flex flex-col w-[170px]">
                          <span>RealFeel Temp</span>
                          <span className="flex flex-row text-xl font-bold justify-center items-center">
                            {hourly.feelslike_c}
                            <TbTemperatureCelsius size={20} />/
                            {hourly.feelslike_f}
                            <TbTemperatureFahrenheit size={20} />
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-row md:w-full gap-[30px] my-4">
                        <div className="flex flex-col w-[170px]">
                          <span>Humidity</span>
                          <span className="text-xl font-bold text-center">
                            {hourly.humidity}
                          </span>
                        </div>
                        <div className="flex flex-col w-[170px] justify-center items-center">
                          <span> {hourly.condition.text}</span>
                          <Image
                            src={`https:${hourly.condition.icon}`}
                            alt={hourly.condition.text}
                            width={50}
                            height={50}
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HourlyWeather;
