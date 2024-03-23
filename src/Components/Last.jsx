function Last() {
  return (
    <div className="h-[120vh] w-[2880px] bg-[#f3ede4] flex py-[200px] relative">
      <div className="w-[35%]   ">
        <div className="">
          <img src="golf.webp" alt="" />
          <div className="absolute bottom-[100px] left-[500px]">
            <img className="w-[500px]" src="priority.svg" alt="" />
          </div>
          <div className="absolute bottom-[100px] left-[800px]">
            <img className="w-[400px]" src="network.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="w-[60%] flex flex-col gap-[150px]  p-[100px]">
        <div className="text-[200px] leading-none font-black text-black">
          <h2>DOING GOOD,,</h2>

          <h2>TOGETHER</h2>
        </div>
        <p className="text-6xl font-normal text-black ">
          “Running a startup apparel business can be diffiult; and managing
          cashflow has always been one of our most important challenges. Kikin
          helped us navigate this with their quick and easy application process
          and rapid turn around tie. I've already recommended them to a number
          of other businesses we know!
        </p>
        <div className="flex flex-col gap-[40px]">
          <img
            className="w-[300px]"
            src="   https://assets-global.website-files.com/635273ea37c256ef2835d522/652a9e76161daabd6bcf0ddc_Logo-manors.svg  "
            alt=""
          />
          <div className="flex items-center gap-[600px] ">
            <p className="text-4xl font-normal flex text-black">
              Jojo Regacc, Founder at Manors Golf
            </p>
            <div className="flex gap-[50px] cursor-pointerd">
              <div className="w-[150px] h-[150px] border rounded-full border-green-600 hover:bg-green-500 hover:text-white duration-300">
                <img src="left.svg" alt="" />
              </div>
              <div className="w-[150px] h-[150px] border rounded-full border-green-600 hover:bg-green-500 hover:text-white duration-300">
                <img src="right.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[5%]"></div>
    </div>
  );
}
export default Last;
