import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getProfileById } from "../utils/CodeGatherApi";

const MyContext = React.createContext();
export default MyContext;

export const MyContextProvider = ({ children }) => {
  let profileData;

  useEffect(() => {
    AsyncStorage.getItem("profileId")
      .then((id) => {
        const { profile_id } = JSON.parse(id);
        return getProfileById(profile_id);
      })
      .then((profile) => {
        profileData = profile;
      });
  }, []);

  return (
    <MyContext.Provider value={profileData}>{children}</MyContext.Provider>
  );
};
