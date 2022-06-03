import { useEffect, useState } from "react";
import { api } from "./api";

export const useAuthState = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    api.getToken().then(() => setLoggedIn(true));
  }, []);

  return loggedIn;
};
