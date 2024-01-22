import { useState } from "react";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }) => {

  const [data, setData] = useState({nombre:'henry'})
  return (
    <UserContext.Provider value={{data,setData}}  >
      {children}
    </UserContext.Provider>
    );
};
