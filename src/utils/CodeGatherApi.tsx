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

export const postLogin = async (email: string, password: string) => {
  const response = await fetch(
    `https://codegather.onrender.com/api/users/login`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }
  );
  const data = await response.json();
  return data;
};
