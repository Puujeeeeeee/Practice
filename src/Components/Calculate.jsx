function Calculate() {
  return (
    <div className="bg-[#0e2408] h-[100vh]  p-[80px]">
      <div className="flex">
        <div className="gap-[450px] w-[50%] flex flex-col">
          <p className="text-[200px] text-white font-black leading-none relative">
            CALCULATE
            <br />
            YOUR <br />
            FUNDING
            <div className="flex absolute gap-[20px] ">
              <img
                className="w-[300px] relative left-[100px]"
                src="life.svg"
                alt=""
              />
              <img
                className="w-[300px] absolute top-[-100px] left-[500px] "
                src="respons.svg"
                alt=""
              />
              <img
                className="w-[300px] absolute top-[30px] left-[700px]"
                src="economic.svg"
                alt=""
              />
            </div>
          </p>
          <div className=" ">
            <div className=" py-[50px] text-4xl leading-snug text-white">
              Your funding – and your fee – is based on how financially healthy{" "}
              <br /> and ESG aware your company is. The more ESG accreditations
              <br />
              you have, the lower your fee.
            </div>
            <button className="border p-9 text-3xl bg-green-500 text-black rounded-2xl font-semibold">
              GET FUNDING
            </button>
          </div>
        </div>

        <div className="w-[50%] border border-gray-400 p-[80px] rounded-xl">
          <div className="flex flex-col">
            <div className="flex items-center">
              <img className="w-[80px]" src="copy.svg" alt="" />{" "}
              <p className="text-white text-4xl">Invoice Amount</p>
            </div>
            <div className="flex items-center">
              <img className="w-[80px]" src="copy.svg" alt="" />{" "}
              <p className="text-white text-4xl">Months to pay back</p>
            </div>
            <div className="flex items-center">
              <img className="w-[80px]" src="copy.svg" alt="" />{" "}
              <p className="text-white text-4xl">Credit rating</p>
            </div>
          </div>
          <div className="flex flex-col gap-[100px] py-[200px] border-b-2">
            <p className="text-white text-4xl">Claim your discount</p>
            <div className="flex gap-[50px]">
              <img
                className="w-[200px] border rounded-xl "
                src="planet.svg"
                alt=""
              />
              <img
                className="w-[200px] border rounded-xl "
                src="for.svg"
                alt=""
              />
              <img
                className="w-[200px] border rounded-xl "
                src="cer.svg"
                alt=""
              />
              <img
                className="w-[200px] border rounded-xl "
                src="climate.svg"
                alt=""
              />
              

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Calculate;
