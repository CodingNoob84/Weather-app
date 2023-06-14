import React from "react";
import { AiFillFire } from "react-icons/ai";
import { FaCarSide } from "react-icons/fa";

function Footer() {
  return (
    <div className="border w-[400px] md:w-[800px] h-[50px] bg-slate-600 my-5 rounded-lg text-slate-100 flex flex-row justify-center items-center">
      Created by{" "}
      <div className="flex flex-row mx-2">
        <span title="Kar" className="cursor-pointer">
          <FaCarSide size={20} />
        </span>
        <span title="Thi (tamil)" className="cursor-pointer">
          <AiFillFire size={20} className="text-red-400" />
        </span>
      </div>
    </div>
  );
}

export default Footer;
