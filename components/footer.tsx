import React from "react";
import LinkButton from "./linkButton";
import ServiceIcon from "./serviceIcon";
import { services } from "data/services";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="flex flex-col lg:flex-row p-4 sm:p-6 md:p-8 lg:p-10 items-center justify-start w-full mt-auto gap-6 lg:gap-0 pt-10 max-w-5xl">
      {/* Links Section */}
      <div className="flex flex-col gap-3 sm:gap-4 lg:gap-5 w-full lg:w-auto md:items-start items-center">
        <LinkButton
          text="Implementation and Support"
          href="/implementationSupport"
        ></LinkButton>
        <LinkButton
          text="Terms and Conditions"
          href="/termsAndConditions"
        ></LinkButton>
      </div>

      {/* Service Icons Section */}
      <div className="flex gap-4 sm:gap-5 lg:mx-20 justify-center">
        {services
          .filter(
            (service) =>
              service.name == "Why us?" || service.name == "Quotation"
          )
          .map((service) => (
            <Link
              href={"/whyUs"}
              key={service.name}
              className="flex flex-col items-center max-w-[120px] sm:max-w-[145px] text-center hover:scale-105 transition-all duration-300"
            >
              <div
                className="w-[70px] h-[70px] sm:w-[85px] sm:h-[85px] text-[#323232] flex items-center justify-center rounded-lg mb-2 sm:mb-4 [&>svg]:text-4xl sm:[&>svg]:text-5xl hover:cursor-cell hover:shadow-lg transition-all duration-200"
                style={{ backgroundColor: service.colour }}
              >
                {service.icon}
              </div>
              <h2 className="text-[12px] sm:text-[14px] font-medium text-black">
                {service.name}
              </h2>
            </Link>
          ))}
      </div>

      {/* Company Info Section */}
      <div className="lg:ml-auto w-full lg:w-auto">
        <p className="text-gray-600 text-center text-[10px] sm:text-[11px] md:text-[12px] leading-relaxed">
          James Vrsecky Digital
          <br />
          Custom Next.js Development & Web Solutions
          <br />
          <br />
          For custom quotes and enterprise solutions, please contact us:
          <br />
          Email: vrsecky102@gmail.com
          <br />
          Phone: +61 (0)402 938 014
          <br />
          Web: www.jamesvrseckydigital.com.au
          <br />
          <br />
          All prices in AUD | Prices subject to change | ABN: 93 245 401 158
        </p>
      </div>
    </section>
  );
}
