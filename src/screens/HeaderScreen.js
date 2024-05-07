import React from "react";
import HeaderImage from "../components/HeaderComponents/HeaderImage";
import IpInput from "../components/HeaderComponents/IpInput";

const HeaderScreen = () => {
  return (
    <div className="relative">
      <HeaderImage />
      <div className="absolute top-0 left-0 right-0 bottom-14 flex items-center justify-center">
        <IpInput />
      </div>
    </div>
  );
};

export default HeaderScreen;
