import { useState } from "react";

export const useAuth = () => {
  const [isAuthenticated, setisAuthenticated] = useState(false);

  return { isAuthenticated, setisAuthenticated };
};
