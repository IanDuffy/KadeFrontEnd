// components/Footer.js

import Link from "next/link";

export default function Footer() {
  return (
    <div className=" text-light pb-8  px-6">
      <div className="max-w-[1440px] bg-secondary mx-auto lg:p-12 p-8  rounded-xl">
        <div className="flex lg:flex-row flex-col md:gap-8 gap-4 text-center sm:text-left ">
          <div className="max-w-[433px] w-full flex flex-col justify-between items-start">
            <div className="flex items-center mb-4">
              <div className="w-4 h-4 mr-2 bg-blue-600 rounded-full"></div>
              <span className="text-6xl font-semibold ">
                {footerLinks.logo.title}
              </span>
            </div>
            <div className="flex-grow"></div>
            <p className="text-light text-[17px] hover:text-primary lg:block flex">
              {footerLinks.logo.copyright}
            </p>
          </div>

          <div className="flex flex-col justify-between max-w-[288px] w-full">
            <div className="flex flex-col items-start space-y-2 lg:mb-0 mb-4">
              {footerLinks.middleLinks.slice(0, 2).map((link, index) => (
                <Link
                  key={index}
                  href="#"
                  className="text-light md:text-[17px] text-sm hover:text-primary"
                >
                  {link}
                </Link>
              ))}
            </div>
            <div className="flex space-x-4">
              {footerLinks.middleLinks.slice(2).map((link, index) => (
                <Link
                  key={index}
                  href="#"
                  className="text-light md:text-[17px] text-sm hover:text-primary"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          <div className="max-w-[288px] w-full flex flex-col space-y-3 items-start">
            {footerLinks.rightLinks.map((link, index) => (
              <Link
                key={index}
                href="#"
                className="text-light md:text-[17px] text-sm hover:text-primary"
              >
                {link}
              </Link>
            ))}
          </div>

          <div className="max-w-[288px] w-full flex flex-col space-y-2 items-start">
            <div className=" mb-2">
              <h3 className="font-semibold ">Language:</h3>
              <div className="text-light text-[17px] hover:text-primary p-0 m-0">
                {footerLinks.language}
              </div>
            </div>
          </div>
        </div>
        <p className="text-light md:text-[17px] text-sm text-left mt-8 lg:hidden block">
          {footerLinks.logo.copyright}
        </p>
      </div>
    </div>
  );
}

const footerLinks = {
  logo: { title: "KADE", copyright: "© 2024 Kade AI" },
  middleLinks: ["The Latest", "About", "Cookies", "Privacy"], // Added Cookies and Privacy
  rightLinks: [
    "Entrepreneurship",
    "Digital Marketing",
    "Customer Experience",
    "Artificial Intelligence",
    "Working Well",
    "Business Growth",
  ],
  language: ["English"],
};
