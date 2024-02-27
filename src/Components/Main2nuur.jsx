function Main2() {
  return (
    <div className="bg-[#f3ede4] flex flex-col justify-center items-center h-[1700px] relative">
      <div>
        <div className="text-[200px] leading-none font-black text-black">
          <h2>GOOD FOR THE</h2>
          <h2 className="text-center">PLANET.AND</h2>
          <h2>YOUR BUSINESS.</h2>
        </div>
      </div>
      <div className="  items-center justify-center  flex flex-col ">
        <div className="p-[50px] flex flex-col gap-4">
          <p className="text-black text-4xl">
            We are on a mission to help good businesses grow. This is why we
            reward
          </p>
          <p className="text-black text-4xl">
            sustainable businesses with lower fees, freeing up even more of your
            cash.
          </p>
          <p className="text-black text-4xl text-center">
            Get started and access funding in 5 minutes.
          </p>
        </div>

        <button className="border-double text-white  p-9 text-3xl bg-green-500 rounded-2xl font-semibold">
          GET FUNDING
        </button>
      </div>
      <div className=" absolute ">
        <img
          className="w-[350px] h-[350px] top-[-400px] right-[1100px]  absolute"
          src="change.svg"
          alt=""
        />
        <img
          className="w-[350px] h-[350px] top-[-600px] left-[1100px]  absolute"
          src="make.svg"
          alt=""
        />
        <img
          className="w-[350px] h-[350px] top-[-100px] left-[1280px] absolute"
          src="borrow.svg"
          alt=""
        />
        <img
          className="w-[350px] h-[350px] top-[400px] left-[1100px] absolute"
          src="put.svg"
          alt=""
        />
        <img
          className="w-[350px] relative top-[400px] h-[350px] right-[1000px]"
          src="work.svg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Main2;
