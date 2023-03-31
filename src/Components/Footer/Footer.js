import React from "react";

function Footer() {
  return (
    <>
      <div className="bg-sky-100 h-36">
        <div className="flex flex-col items-center">
          <h2 className="mt-8">We’d love to hear what you think!</h2>
          <button class="bg-white h-8 mt-5 px-5 py-1 text-sm font-bold rounded-full border border-black hover:border-2">
            Give Feedback
          </button>
        </div>
      </div>
      <div className="bg-[#017cc2]">
        <div className="px-36 text-[14px] py-5 text-center text-white">
          <ul className="flex justify-center flex-wrap ">
            <li className="pr-6">
              <a href="#">All Departments</a>
            </li>
            <li className="pr-6">
              <a href="#">Store Directory</a>
            </li>
            <li className="pr-6">
              <a href="#">Careers</a>
            </li>
            <li className="pr-6">
              <a href="#">Our Company</a>
            </li>
            <li className="pr-6">
              <a href="#">Sell on Walmart.com</a>
            </li>
            <li className="pr-6">
              <a href="#">Help</a>
            </li>
            <li className="pr-6">
              <a href="#">COVID-19 Vaccine Scheduler</a>
            </li>
            <li className="pr-6">
              <a href="#">Product Recalls</a>
            </li>
            <li className="pr-6">
              <a href="#">Accessibility</a>
            </li>
            <li className="pr-6">
              <a href="#">Tax Exempt Program</a>
            </li>
            <li className="pr-6">
              <a href="#">Get the Walmart App</a>
            </li>
            <li className="pr-6">
              <a href="#">Sign-up for Email</a>
            </li>
            <li className="pr-6">
              <a href="#">Safety Data Sheet</a>
            </li>
            <li className="pr-6">
              <a href="#">Terms of Use</a>
            </li>
            <li className="pr-6">
              <a href="#">Privacy & Security</a>
            </li>
            <li className="pr-6">
              <a href="#">CA Privacy Rights</a>
            </li>
            <li className="pr-6">
              <a href="#">California Supply Chain Act</a>
            </li>
            <li className="pr-6">
              <a href="#">Your Privacy Choices</a>
            </li>
            <li className="pr-6 ">
              <a href="#">Request My Personal Information</a>
            </li>
            <li className="pr-6">
              <a href="#">#IYWYK</a>
            </li>
          </ul>
          <p className="py-5">© 2023 Walmart. All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
