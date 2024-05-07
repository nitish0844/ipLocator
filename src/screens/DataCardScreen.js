import React from "react";
import { useLocationData } from "../components/State/Store";

const DataCardScreen = () => {
  const { locationData } = useLocationData();

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white lg:w-card w-10/12 lg:h-32 h-56 flex flex-col justify-center rounded-3xl shadow-2xl p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:ml-32 lg:p-4 p-4 text-center lg:text-left justify-center">
          <div>
            <h1 className="text-sm lg:text-base font-bold text-gray-400">
              IP Address
            </h1>
            <p className="text-lg lg:text-xl font-bold text-black">
              {locationData.ip}
            </p>
          </div>

          <div>
            <h1 className="text-sm lg:text-base font-bold text-gray-400">
              Location
            </h1>
            <p className="text-lg lg:text-xl font-bold text-black">
              {locationData.location.city}, <br />{" "}
              {locationData.location.region}
            </p>
          </div>

          <div>
            <h1 className="text-sm lg:text-base font-bold text-gray-400">
              Timezone
            </h1>
            <p className="text-lg lg:text-xl font-bold text-black">
              {locationData.location.timezone}
            </p>
          </div>

          {/* {locationData.isp && (
            <div>
              <h1 className="text-sm lg:text-base font-bold text-gray-400">
                ISP
              </h1>
              <p className="text-lg lg:text-xl font-bold text-black">
                {locationData.isp}
              </p>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default DataCardScreen;
