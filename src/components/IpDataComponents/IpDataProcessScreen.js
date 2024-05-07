import { useEffect } from "react";
import { useIpData, useLocationData } from "../State/Store";

const IpDataProcessScreen = () => {
  const { ipData } = useIpData();
  const { setLocationData } = useLocationData();

  const ApiKey = "at_QxdGgt67OvIo0EhGeoJKvlYacDD3v";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://geo.ipify.org/api/v1?apiKey=${ApiKey}&ipAddress=${ipData}`
        );
        if (response.ok) {
          const data = await response.json();
          setLocationData(data);
          console.log("LocationData from IP", data);
        } else {
          console.error("Error fetching location data");
        }
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ipData]);
};

export default IpDataProcessScreen;
