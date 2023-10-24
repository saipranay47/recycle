import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white w-full flex justify-center items-center flex-col">
      <div className=" mx-14 max-w-[1440px] px-4 pt-16 sm:px-6 lg:px-8">
        <div className="mt-16 grid grid-cols-1 gap-8 border-tpt-16 md:grid-cols-4 lg:grid-cols-6">
          <div className="text-center sm:text-left md:col-span-4 lg:col-span-2">
            <p className="text-lg font-montreal-bold text-gray-100">ReCycle</p>

            <div className="mx-auto mt-5 max-w-md ">
              <p className="leading-relaxed text-gray-500 ltr:sm:text-left rtl:sm:text-right">
                Join our newsletter to stay up to date on features and releases.
              </p>

              <form className="mt-5">
                <div className="flex flex-col gap-4 sm:flex-row lg:flex-row lg:items-start">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>

                  <input
                    className="w-full rounded-full border-gray-200 px-6 py-3 shadow-sm"
                    type="email"
                    placeholder="Enter your email"
                  />

                  <button
                    className="block rounded-full bg-black px-8 py-3 text-white transition hover:bg-gray-900 border"
                    type="submit"
                  >
                    Subscribe
                  </button>
                </div>
                <p className="mt-4 leading-relaxed text-gray-500 ltr:sm:text-left rtl:sm:text-right text-xs">
                  By subscribing you agree to with our Privacy Policy and
                  provide consent to receive updates from our company.
                </p>
              </form>
            </div>
          </div>
          <div></div>
          <div className="text-center sm:text-left">
            <p className="text-lg font-montreal-bold text-gray-100">Explore</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a
                  className="text-gray-300 transition hover:text-gray-300/75"
                  href="/"
                >
                  E-Bikes
                </a>
              </li>

              <li>
                <a
                  className="text-gray-300 transition hover:text-gray-300/75"
                  href="/"
                >
                  Specs
                </a>
              </li>

              <li>
                <a
                  className="text-gray-300 transition hover:text-gray-300/75"
                  href="/"
                >
                  Our impact
                </a>
              </li>

              <li>
                <a
                  className="text-gray-300 transition hover:text-gray-300/75"
                  href="/"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-lg font-montreal-bold text-gray-100">
              Our top picks
            </p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a
                  className="text-gray-300 transition hover:text-gray-300/75"
                  href="/"
                >
                  Zoom
                </a>
              </li>

              <li>
                <a
                  className="text-gray-300 transition hover:text-gray-300/75"
                  href="/"
                >
                  EcoBoost
                </a>
              </li>

              <li>
                <a
                  className="text-gray-300 transition hover:text-gray-300/75"
                  href="/"
                >
                  Voltage
                </a>
              </li>

              <li>
                <a
                  className="text-gray-300 transition hover:text-gray-300/75"
                  href="/"
                >
                  PowerPedal
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-lg font-montreal-bold text-gray-100">
              Follow us
            </p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a
                  className="text-gray-300 transition hover:text-gray-300/75"
                  href="/"
                >
                  Facebook
                </a>
              </li>

              <li>
                <a
                  className="text-gray-300 transition hover:text-gray-300/75"
                  href="/"
                >
                  Instagram
                </a>
              </li>

              <li>
                <a
                  className="text-gray-300 transition hover:text-gray-300/75"
                  href="/"
                >
                  Twitter
                </a>
              </li>

              <li>
                <a
                  className="text-gray-300 transition hover:text-gray-300/75"
                  href="/"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-100 pt-6 sm:flex sm:items-center sm:justify-between">
          <p className="text-center text-sm text-gray-500 sm:text-left">
            Copyright &copy; 2023. All rights reserved.
          </p>

          <ul className="mt-4 flex justify-center gap-6 sm:mt-0 sm:justify-start">
            <li>
              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                className="transition hover:text-gray-300/75 underline"
              >
                <span className="">Privacy Policy</span>
              </a>
            </li>
            <li>
              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                className="transition hover:text-gray-300/75 underline"
              >
                <span className="">Terms of Service</span>
              </a>
            </li>
            <li>
              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                className="transition hover:text-gray-300/75 underline"
              >
                <span className="">Cookies Settings</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <h1 className=" uppercase 2xl:text-[284px] xl:text-[264px] text-[19vw]">
        C<span className=" font-montreal-italic">o</span>mmute
      </h1>
    </footer>
  );
}

export default Footer;
