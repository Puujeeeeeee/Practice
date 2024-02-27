function Main() {
  return (
    <div>
      <div className="relative">
        <div className="bg-[#0e2408]  h-[1500px] ">
          <div className="flex flex-col justify-center items-center  relative z-10">
            <h1 className="text-[240px] font-black text-white ">
              FINANCING{" "}
            </h1>
            <h1 className="text-green-500 text-[240px] font-black">
              THE FUTURE
            </h1>
          </div>
        </div>
      </div>
      <div className=" ">
        <div className="up z-10 relative items-center justify-center top-[-800px] flex flex-col gap-[30px]">
          <p className="text-white text-4xl flex w-[1000px] flex-wrap">
            Pay suppliers faster, manage invoices, and extend cash for longer.
          </p>
          <p className="text-white text-4xl">
            Get access to funding without giving up equity, so that you can
            focus on.
          </p>
          <p className="text-white text-4xl">growing your company.</p>

          <button className="border p-9 text-3xl bg-green-500 text-white rounded-2xl font-semibold">
            GET FUNDING
          </button>
        </div>
        <div>
          <img
            className=" h-[1450px] w-[2880px] absolute top-[610px] z-0"
            src="bg-image.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
