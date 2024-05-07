import React from "react";

import MapScreen from "./MapScreen";
import HeaderScreen from "./HeaderScreen";
import DataCardScreen from "./DataCardScreen";
import IpDataProcessScreen from "../components/IpDataComponents/IpDataProcessScreen";

import { useLocationData } from "../components/State/Store";

const Main = () => {
  const { locationData } = useLocationData();
  return (
    <>
      <div className="relative">
        <HeaderScreen />
        <div className="absolute inset-x-0 top-48 z-40">
          {locationData && <DataCardScreen />}
        </div>

        <div className="relative z-0">
          <MapScreen />
        </div>
      </div>
      <IpDataProcessScreen />
    </>
  );
};

export default Main;
