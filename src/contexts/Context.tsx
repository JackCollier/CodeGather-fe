import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getProfileById } from "../utils/CodeGatherApi";

const MyContext = React.createContext();
export default MyContext;

export const MyContextProvider = ({ children }) => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem("profileId")
      .then((id) => {
        const { profile_id } = JSON.parse(id);
        return getProfileById(profile_id);
      })
      .then((profile) => {
        setProfileData(profile);
      })
      .catch((err) => {});
  }, [profileData]);

  return (
    <MyContext.Provider value={profileData}>{children}</MyContext.Provider>
  );
};
