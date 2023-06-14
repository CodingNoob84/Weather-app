"use client";
import { getCityNames } from "@/Lib/services";
import React, { useRef, useState } from "react";

function SearchLocation({ setCityName }) {
  const [locations, setLocations] = useState([]);
  const inputRef = useRef();
  console.log(process.env.API_KEY);

  const handleChange = async (e) => {
    const value = e.target.value;
    if (value.length > 2) {
      const data = await getCityNames(value);
      setLocations(data);
    } else {
      setLocations(null);
      setCityName(null);
    }
  };

  const handleCitySelection = (val) => {
    setCityName(val);
    inputRef.current.value = val;
    setLocations(null);
  };

  return (
    <div className="border rounded-lg shadow-xl bg-gray-700 text-white h-[100px] w-[300px] md:w-[800px] flex justify-center items-center">
      <div className="flex flex-col md:flex-row p-2">
        <div className="px-2">Search Location:</div>
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            className="border w-[200px] h-[30px] p-2 bg-gray-600"
            onChange={handleChange}
          />
          <div className="absolute w-[200px] border bg-gray-600 flex flex-col">
            {locations &&
              locations.map((location, index) => (
                <div
                  className="py-1 px-2 hover:bg-slate-100 cursor-pointer"
                  key={index}
                  onClick={() => handleCitySelection(location.name)}
                >
                  {location.name}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchLocation;
