import React, { createContext, useState } from 'react';

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [userdata, setUserdata] = useState(null);

  return (
    <LoginContext.Provider value={{ userdata, setUserdata }}>
      {children}
    </LoginContext.Provider>
  );
};
