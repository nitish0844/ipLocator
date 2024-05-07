import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import locationIcon from "../assets/Images/icon-location.svg";
import { MutatingDots } from "react-loader-spinner";
import { useLocationData } from "../components/State/Store";

const MapScreen = () => {
  const [mapCenter, setMapCenter] = useState([0, 0]);
  const [isLoading, setIsLoading] = useState(true);
  const { locationData } = useLocationData();

  useEffect(() => {
    if (locationData && locationData.location) {
      setMapCenter([locationData.location.lat, locationData.location.lng]);
      setIsLoading(true); // Show loader
      setTimeout(() => {
        setIsLoading(false); // Hide loader after a short delay
      }, 1000);
    } else {
      // If location data is not available, try getting user location by permission
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setMapCenter([position.coords.latitude, position.coords.longitude]);
            setIsLoading(true); // Show loader
            setTimeout(() => {
              setIsLoading(false); // Hide loader after a short delay
            }, 100);
          },
          (error) => {
            console.error("Error getting user location:", error);
            setIsLoading(false);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
        setIsLoading(false);
      }
    }
  }, [locationData]);

  const customIcon = new L.Icon({
    iconUrl: locationIcon,
    iconSize: [30, 40],
  });

  return (
    <div className="flex justify-center items-center h-map">
      {isLoading ? (
        <MutatingDots
          visible={true}
          height="100"
          width="100"
          color="#4fa94d"
          secondaryColor="#abeb34"
          radius="12.5"
          ariaLabel="mutating-dots-loading"
        />
      ) : (
        <MapContainer
          center={mapCenter}
          zoom={13}
          style={{ height: "100vh", width: "100vw" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {locationData.location && (
            <Marker
              position={[locationData.location.lat, locationData.location.lng]}
              icon={customIcon}
            >
              <Popup>
                Location: {locationData.location.city},{" "}
                {locationData.location.region}, {locationData.location.country}
              </Popup>
            </Marker>
          )}
        </MapContainer>
      )}
    </div>
  );
};

export default MapScreen;
