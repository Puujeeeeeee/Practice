import Link from "next/link";
import { useRef } from "react";

function Navbar() {
  return (
    <div className=" sticky top-0 z-50">
      <div className="flex justify-between items-center p-[50px]      bg-[#0e2408]">
        <div>
          <p className="text-6xl  font-black text-white"> KiKiN</p>
        </div>
        <div className="">
          <div className="text-3xl flex gap-[40px] font-bold text-white">
            <p>HOW IT WORKS</p>
            <p>PRICING</p>
            <p> BLOG</p>
          </div>
        </div>
        <div className="flex text-3xl font-semibold gap-[30px] cursor-pointer">
          <div className="border border-white rounded-xl text-white p-7 ">
            LOG IN
          </div>
          <div className="border border-black rounded-xl text-white p-7 bg-green-500">
            GET FUNDING
          </div>

          <div className="border flex gap-[40px] border-black p-[30px] fixed bottom-8 bg-[#f3ede4] rounded-xl flex-wrap">
            <img className="w-[50px]" src="graph.svg" alt="" />
            <div className="leading-none flex items-center flex-col">
              <p className="text-black font-bold">Calculate</p>
              <p className="text-black font-bold">Your funding</p>
            </div>
            <img className="w-[50px]" src="bottom.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
