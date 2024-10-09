import { footerIcon } from "@/utils/footerIcon";
import React from "react";

type Props = {};

const Footer = () => {
  return (
    <footer className="py-4 flex flex-col items-center pb-8">
      <div className="border-t-2 w-full"></div>
      <div className="pt-6 flex gap-4">
        {footerIcon.map((icon, index) => (
          <div key={index}>
            <a
              href={icon.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 font-medium"
            >
              {icon.icon}
            </a>
          </div>
        ))}
      </div>
      <p className="pt-6 text-sm">Made by Sahatsawat Rimphongern</p>
    </footer>
  );
};

export default Footer;
