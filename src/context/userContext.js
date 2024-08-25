import { createContext } from "react";

const userContext = createContext({
  userName: "Default",
  age: "Not Specified",
});

export default userContext;
