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
              <br /> and ESG awareyour company is. The moree ESG accreditations
              <br />
              you have, the lower your fee.
            </div>
            <button className="border p-9 text-3xl bg-green-500 text-black rounded-2xl font-semibold">
              GET FUNDING
            </button>
          </div>
        </div>

        <div className="w-[50%] border border-gray-400 p-[30px] rounded-xl">
          <div className="flex flex-col gap-[40px]">
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
            <input
              type="range"
              min={0}
              max="100"
              value="25"
              className="range"
              step="25"
            />
            <div className="w-[50%] flex justify-between text-xs px-2">
              <span>|</span>
              <span>|</span>
              <span>|</span>
              <span>|</span>
              <span>|</span>
            </div>
            <div className="rating rating-lg rating-half">
              <input type="radio" name="rating-10" className="rating-hidden" />
              <input
                type="radio"
                name="rating-10"
                className="bg-green-500 mask mask-star-2 mask-half-1"
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-green-500 mask mask-star-2 mask-half-2"
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-green-500 mask mask-star-2 mask-half-1"
                checked
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-green-500 mask mask-star-2 mask-half-2"
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-green-500 mask mask-star-2 mask-half-1"
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-green-500 mask mask-star-2 mask-half-2"
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-green-500 mask mask-star-2 mask-half-1"
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-green-500 mask mask-star-2 mask-half-2"
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-green-500 mask mask-star-2 mask-half-1"
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-green-500 mask mask-star-2 mask-half-2"
              />
            </div>
            <div className="mockup-code bg-primary text-primary-content">
              <pre>
                <code>Hello World</code>
              </pre>
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
