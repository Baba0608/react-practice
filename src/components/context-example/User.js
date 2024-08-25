import userContext from "../../context/userContext";
import { useContext } from "react";

const User = () => {
  const { userName, age } = useContext(userContext);

  return (
    <div className="mt-3">
      <div>User Name: {userName}</div>
      <div>Age: {age}</div>
    </div>
  );
};

export default User;
