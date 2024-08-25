import { useState } from "react";
import User from "./User";
import userContext from "../../context/userContext";

const WelcomeComp = () => {
  const [user, setUser] = useState("");
  const [userAge, setUserAge] = useState("");

  return (
    <userContext.Provider value={{ userName: user, age: userAge }}>
      <div className="mt-3">
        <input
          className="border border-black p-1"
          placeholder="User Name..."
          value={user}
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
        <input
          className="border border-black p-1"
          placeholder="Age..."
          value={userAge}
          onChange={(e) => {
            setUserAge(e.target.value);
          }}
        />

        <User />
      </div>
    </userContext.Provider>
  );
};

export default WelcomeComp;
