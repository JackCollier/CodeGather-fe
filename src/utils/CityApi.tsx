import { REST_API_KEY, APPLICATION_ID } from "@env";

export const getCityData = async () => {
  const response = await fetch(
    "https://parseapi.back4app.com/classes/Ukcities_City?count=1&limit=350&order=-population&keys=name,location",
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