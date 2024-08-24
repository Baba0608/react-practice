import { useState, useEffect } from "react";
import useOnlineStatus from "../Custom-Hooks/useOnlineStatus";

const Updating = () => {
  const [count, setCount] = useState(0);

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    // const timer = setInterval(() => {
    //   console.log("Timer");
    // }, 1000);

    // this function will be executed when the component is unmounted.
    return () => {
      console.log("Unmounted");
      //   clearInterval(timer);
    };
  }, []);

  // This will run when the count is updated.
  useEffect(() => {
    console.log("Count Updated");
  }, [count]);

  return (
    <div>
      <div>Online: {onlineStatus ? "🟢" : "🔴"}</div>
      <div>Count is: {count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
    </div>
  );
};

export default Updating;
