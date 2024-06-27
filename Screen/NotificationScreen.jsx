import React from "react";
import SafeView from "../Utils/SafeView";
import Notification from "../Components/Notification/Notification";

const NotificationScreen = ({navigation}) => {
    const onBack = () => navigation.goBack();
  return (
    <SafeView>
      <Notification onBack={onBack}/>
    </SafeView>
  );
};

export default NotificationScreen;
