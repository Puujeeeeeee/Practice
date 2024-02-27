import React from "react";

function Footer() {
  return (
    <div>
      <div className="relative">
        <div className="bg-[#0e2408] h-[1500px] px-[100px] flex flex-col justify-center items-center">
          <div className="text-[200px] leading-none font-black">
            <h2 className="text-white">GET FUNDING.</h2>
            <h2 className="text-yellow-300 text-center">CHANGE THE</h2>
            <h2 className="text-yellow-300 text-center">WORLD.</h2>
          </div>
          <button class="btn btn-primary text-3xl">SIGN UP TO KIKIN</button>
        </div>
      </div>
      <div className="up z-10 relative items-center justify-center top-[-800px] flex flex-col gap-[30px]">
        <div className="relative top-[200px] opacity">
          <img className="h-[1450px]" src="bg-image.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
