import React from "react";

function Footer() {
  return (
    <div>
      <div className="relative">
        <div className="bg-[#0e2408] h-[1500px] px-[100px] flex flex-col justify-center items-center">
          <div className="text-[200px] leading-none font-black">
            <h2 className="text-white">GET FUNDING.</h2>
            <h2 className="text-yellow-300 text-center">CHANGE THE</h2>
            <h2 className="text-yellow-300 text-center">WORLD</h2>
          </div>
          <button class="btn btn-primary text-3xl">SIGN UP TO KIKIN</button>
        </div>
      </div>
      <div className="up z-10 relative items-center justify-center top-[-800px] flex flex-col gap-[30px]">
        <div className="relative top-[200px] opacity">
          <img className="h-[1350px]" src="bg-image.svg" alt="" />
        </div>
        <footer className="footer p-[100px] justify-center gap-[500px] flex text-3xl bg-[#0e2408] text-white opacity-90 h-[600px] absolute top-[1550px]">
          <nav>
            <h6 className="footer-title text-4xl">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title text-4xl">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title text-4xl">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
          <form>
            <h6 className="footer-title text-4xl">Newsletter</h6>
            <fieldset className="form-control w-80">
              <label className="label">
                <span className="label-text text-2xl">
                  Enter your email address
                </span>
              </label>
              <div className="join ">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered join-item text-3xl"
                />
                <button className="btn btn-primary text-2xl join-item">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
