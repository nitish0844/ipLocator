import { create } from "zustand";

export const useIpData = create((set) => ({
  ipData: "",
  setIpData: (data) => set({ ipData: data }),
}));

export const useLocationData = create((set) => ({
  locationData: "",
  setLocationData: (data) => set({ locationData: data }),
}));
