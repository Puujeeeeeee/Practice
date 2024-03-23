function Charts() {
  return (
    <div className="bg-[#f3ede4] flex flex-col justify-center items-center h-[3700px] p-[80px]">
      <div className="flex w-[2700px] gap-[100px]  border-b-2 border-gray-600 py-[80px]">
        <div className="flex flex-col gap-[400px] w-[50%]">
          <div className="flex flex-col gap-[100px]">
            <div className="w-[100px] h-[100px] text-3xl font-bold bg-green-500 rounded-full border flex items-center justify-center text-black">
              01
            </div>
            <div className="text-[100px] text-black leading-none font-black">
              GROW WITH <br />
              THE FLOW.
            </div>
          </div>
          <p className="text-4xl text-black">
            We help you preserve your cash, so that you can focus on growing
            your business and improve cash flow.
          </p>
        </div>

        <img className="w-[1350px] rounded-3xl" src="clouu.webp" alt="" />
      </div>
      <div className="flex w-[2700px] gap-[100px]  border-b-2 border-gray-600 py-[80px] ">
        <div className="flex flex-col gap-[400px] w-[50%] ">
          <div className="flex flex-col gap-[100px]">
            <div className="w-[100px] h-[100px] text-3xl font-bold bg-green-500 rounded-full border flex items-center justify-center text-black">
              02
            </div>
            <div className="text-[100px] text-black leading-none font-black">
              ADAPTABLE
              <br />
              FUNDING. ENDLESS
              <br />
              POSSIBILITIES.
            </div>
          </div>
          <p className="text-4xl text-black ">
            Our AI-driven funding automatically updates as you grow, so you can
            always get the right amount of funds.
          </p>
        </div>

        <img className="w-[1350px] rounded-3xl" src="beauty.jpeg" alt="" />
      </div>
      <div className="flex w-[2700px] gap-[100px]  border-b-2 border-gray-600 py-[80px]">
        <div className="flex flex-col gap-[400px] w-[50%]">
          <div className="flex flex-col gap-[100px]">
            <div className="w-[100px] h-[100px] text-3xl font-bold bg-green-500 rounded-full border flex items-center justify-center text-black">
              03
            </div>
            <div className="text-[100px] leading-none  text-black font-black">
              FAST FUNDS. <br />
              FULL EQUITY.
            </div>
          </div>
          <p className="text-4xl text-black">
            Build your cash instantly without the need for dilution, and own
            more of your business for loner.
          </p>
        </div>

        <img className="w-[1350px] rounded-2xl" src="river.jpeg" alt="" />
      </div>
    </div>
  );
}

export default Charts;
