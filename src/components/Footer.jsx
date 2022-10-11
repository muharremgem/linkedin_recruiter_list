import React from "react";
import { GiSpiderWeb } from "react-icons/gi";
const Footer = () => {
  return (
    <div>
      <h6 className="flex  justify-end text-sm  text-purple-600 font-thin">
        <a href="https://www.muharremgem.com/" target="_blank">
          <GiSpiderWeb /> Designed by Muharrem GEM
        </a>
      </h6>
    </div>
  );
};

export default Footer;
