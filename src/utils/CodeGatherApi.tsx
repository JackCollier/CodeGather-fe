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

interface Singup {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  username: string;
  date_of_birth?: string;
  location: string;
  avatar?: string;
  bio?: string;
}

export const postSingup = async ({
  email,
  password,
  first_name,
  last_name,
  username,
  date_of_birth,
  location,
  avatar,
  bio,
}: Singup) => {
  const response = await fetch(
    `https://codegather.onrender.com/api/users/createuser`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          email,
          password,
          first_name,
          last_name,
          username,
          date_of_birth,
          location,
          avatar,
          bio,
        },
      }),
    }
  );
  const data = await response.json();
  return data;
};

export const getProfileById = async (id: string) => {
  const response = await fetch(
    `https://codegather.onrender.com/api/profiles/${id}`
  );
  const data = response.json();
  return data;
};

export const postEvent = async ({
  event_title,
  date_time,
  topics,
  image,
  location,
  size_limit,
  attending,
  description,
}) => {
  const response = await fetch(`https://codegather.onrender.com/api/events`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
  const data = await response.json();
  return data;
};
