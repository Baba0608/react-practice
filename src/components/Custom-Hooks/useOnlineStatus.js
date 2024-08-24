import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  const setOnline = () => setOnlineStatus(true);
  const setOffline = () => setOnlineStatus(false);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Timer in Hook");
    }, 1000);
    window.addEventListener("online", setOnline);

    window.addEventListener("offline", setOffline);

    return () => {
      clearInterval(timer);
      window.removeEventListener("online", setOnline);
      window.removeEventListener("offline", setOffline);
    };
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
