export const getEventData = async () => {
  const response = await fetch("https://codegather.onrender.com/api/events");
  const data = await response.json();
  return data;
};

export const getEventDataById = async (Id: string) => {
  const response = await fetch(
    `https://codegather.onrender.com/api/events/${Id}`
  );
  const data = await response.json();
  return data;
};
