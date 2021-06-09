import React, { useState, useEffect, useMemo } from "react";
import { axios, useActionCreators } from "../../../../hooks";
import PersonalHeaderLeft from "../personal-info/personal-header-left";
import { PersonalDataContainer, Div } from "./style";
import Login from "./login";
import Password from "./password";

const Notifications = () => {
  const [personalData, setPersonalData] = useState<any>(null);
  const { setAlertMessage } = useActionCreators();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`/user/${"60927f03ad717f2975f9713d"}`);
        const data = await response.data;
        setPersonalData(data);
      } catch (error) {
        if (error.debugMessage) {
          setAlertMessage({ message: error.debugMessage, type: "error" });
        } else {
          setAlertMessage({ message: error.message, type: "error" });
        }
      }
    })();
  }, []);

  return (
    <PersonalDataContainer>
      {personalData && (
        <>
          <PersonalHeaderLeft personalInfo={personalData} /> <Div />
          <Login phoneNumber={personalData.phoneNumber} />
          <Password />
        </>
      )}
    </PersonalDataContainer>
  );
};

export default Notifications;
