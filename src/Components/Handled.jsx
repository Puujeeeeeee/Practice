function Handled() {
  return (
    <div className="h-[200vh] w-[]  bg-[#73d3eb] flex flex-col  items-center">
      <div>
        <div className="relative flex justify-center items-center p-[80px]">
          <img className="h-[100vh] w-[100vw]" src="natural.jpeg" alt="" />

          <div className=" flex  ">
            <h2 className=" absolute flex flex-col top-[10px] right-[170px] text-white font-black text-[200px]">
              WHO WE
            </h2>
            <h2 className=" absolute flex flex-col top-[170px] right-[170px] text-white font-black text-[200px]">
              FUND
            </h2>
          </div>
          <div>
            <img
              className="absolute top-[30%] left-[30%]  w-[1000px] rotate-12"
              src="shakeHandle.webp"
              alt=""
            />
          </div>
        </div>
        <div className="flex">
          <div className="h-[960px] w-[960px] border-2 border-black p-[50px] flex flex-col gap-[100px] ">
            <img className="w-[70px] " src="home.svg" alt="" />
            <div className="text-[80px] leading-none font-black text-black">
              <h2>UK-BASED SMALL TO</h2>

              <h2>MIDSIZE BUSINESSES</h2>
            </div>
          </div>
          <div className="h-[960px] w-[960px] border-2 border-black  p-[50px] flex flex-col gap-[100px]">
            <img className="w-[70px]" src="talon.svg" alt="" />
            <div className="text-[80px] leading-none font-black text-black">
              <h2>WHO NEED TO PAY</h2>
              <h2>TO SUPPLIERS</h2>
              <h2>AROUND THE WORLD</h2>
            </div>
          </div>
          <div className="h-[960px] w-[960px] border-2 border-black  p-[50px] flex flex-col gap-[100px]">
            <img className="w-[70px]" src="lavr.svg" alt="" />
            <div className="text-[80px] leading-none font-black text-black">
              <h2>WHO CAN DEMONSTRATE</h2>

              <h2>SUSTAINABILITY</h2>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-[100px] py-[100px] ">
          <img
            className="w-[350px]"
            src="https://assets-global.website-files.com/635273ea37c256ef2835d522/65cc855bb24174b77269f1a6_nice.svg"
            alt=""
          />
          <img
            className="w-[350px]"
            src="https://assets-global.website-files.com/635273ea37c256ef2835d522/65cc834abd58d205867e0389_manors.svg"
            alt=""
          />
          <img
            className="w-[350px]"
            src="https://assets-global.website-files.com/635273ea37c256ef2835d522/65cc834ab54b70aa5d960e17_LESTRANGE-FINALLOGO_1_2%201.png "
          />
          <img
            className="w-[350px]"
            src="https://assets-global.website-files.com/635273ea37c256ef2835d522/65cc834a42d58de33d62b333_nue%20co.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
export default Handled;
