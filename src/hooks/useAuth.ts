import { useState } from "react";

export const useAuth = () => {
  const [isAuthenticated, setAuthenticated] = useState(false);

  return { isAuthenticated, setAuthenticated };
};
