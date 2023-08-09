import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getProfileById } from "../utils/CodeGatherApi";

const MyContext = React.createContext();
export default MyContext;

export const MyContextProvider = ({ children }) => {
  const [profileData, setProfileData] = useState(null);
  const [isEventPosted, setIsEventPosted] = useState(false);
  const [isProfileUpdated, setIsProfileUpdated] = useState(false);

  // console.log(isProfileUpdated);

  useEffect(() => {
    AsyncStorage.getItem("profileId")
      .then((id) => {
        console.log(id);
        const { profile_id } = JSON.parse(id);
        return getProfileById(profile_id);
      })
      .then((profile) => {
        console.log("profile----->>", profile);
        setProfileData(profile);
      })
      .catch((err) => {});
  }, [isProfileUpdated]);

  return (
    <MyContext.Provider
      value={{
        profileData,
        isEventPosted,
        setIsEventPosted,
        setIsProfileUpdated,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
