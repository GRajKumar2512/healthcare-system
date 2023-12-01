import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [role, setRole] = useState(null);
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);

  useEffect(() => {
    axios
      .get("/profile")
      .then((response) => {
        setRole(response.data.role);
        setEmail(response.data.email);
        setName(response.data.name);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <UserContext.Provider
      value={{ role, setRole, email, setEmail, name, setName }}
    >
      {children}
    </UserContext.Provider>
  );
};
