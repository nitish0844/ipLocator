import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { useIpData } from "../State/Store";

const IpInput = () => {
  const [ipAddress, setIpAddress] = useState("");
  const { setIpData } = useIpData();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIpData(ipAddress);
    setIpAddress(""); // Clear the input after submission
  };

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4 text-white">IP Address Tracker</h1>
      <form onSubmit={handleSubmit} className="relative ">
        <input
          type="text"
          id="ipAddress"
          value={ipAddress}
          onChange={(e) => setIpAddress(e.target.value)}
          placeholder="Enter IP Address"
          required
          className="border border-gray-300 p-2 lg:w-250 h-10 rounded-xl w-80"
        />
        <button
          type="submit"
          className="absolute top-0 right-0 bg-black hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-r-xl h-10"
        >
          <FaChevronRight />
        </button>
      </form>
    </div>
  );
};

export default IpInput;
