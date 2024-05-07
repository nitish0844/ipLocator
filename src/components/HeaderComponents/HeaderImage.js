import React from "react";
import HeaderPic from "../../assets/Images/pattern-bg-desktop.png";

const HeaderImage = () => {
  return (
    <div>
      <img src={HeaderPic} alt="HeaderPic" className="w-full h-64" />
    </div>
  );
};

export default HeaderImage;
