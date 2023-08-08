import { REST_API_KEY, APPLICATION_ID } from "@env";

export const getCityData = async () => {
  const response = await fetch(
    "https://parseapi.back4app.com/classes/Ukcities_City?count=1&limit=300&order=-population&keys=name,location",
    {
      headers: {
        "X-Parse-Application-Id": `${APPLICATION_ID}`,
        "X-Parse-REST-API-Key": `${REST_API_KEY}`,
      },
    }
  );
  const data = await response.json();
  return data;
};

export const convertLongAndLat = async (lat, long) => {
  const response = await fetch(
    `https://geocode.maps.co/reverse?lat=${lat}&lon=${long}`
  );
  const data = await response.json();
  return data;
};

export const convertAddressToLongAndLat = async (address) => {
  const response = await fetch(`https://geocode.maps.co/search?q=${address}`);
  const data = await response.json();
  return data;
};
