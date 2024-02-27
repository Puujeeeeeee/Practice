function Hello() {
  return (
    <div>
      <div className="bg-[#0e2408] flex flex-col justify-center items-center h-[120vh] relative">
        <div>
          <div className="text-[140px] leading-none font-black text-green-500">
            <h2 className="text-center">DO IT FOR THE PLANET.</h2>
            <h2 className="text-center">DO IT FOR YOUR BUSINESS.</h2>
            <h2 className="text-center">THE BETTER YOUR ESG</h2>
            <h2>SCORE GETS, THE BIGGER</h2>
            <h2 className="text-center">THE DISCOUNTS</h2>
          </div>
        </div>

        <div className=" absolute ">
          <img
            className="w-[350px] h-[350px] top-[-400px] right-[1100px]  absolute"
            src="reduced.svg"
            alt=""
          />
          <img
            className="w-[350px] h-[350px] top-[-400px] left-[700px]  absolute"
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
            src="zero.svg"
            alt=""
          />
          <img
            className="w-[350px] relative top-[500px] h-[350px] right-[1100px]"
            src="work.svg"
            alt=""
          />
          <img
            className="w-[350px] h-[350px] top-[800px] left-[500px] absolute rotate-6 "
            src="certificate.svg"
            alt=""
          />

          <img
            className="w-[350px] relative bottom-[300px] h-[350px] right-[1300px]  rotate-45"
            src="pl.svg"
            alt=""
          />
          <img
            className="w-[350px] h-[350px] top-[700px] right-[500px] absolute rotate-6 "
            src="climate.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
export default Hello;
