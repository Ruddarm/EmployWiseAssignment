import { useContext, useState, createContext } from "react";
const UserContext = createContext();

// Provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [update, setUpdate] = useState(false);
  const updateUser = (newData) => {
    setUpdate(true);
    setUser((prevUser) => ({ ...prevUser, ...newData }));
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        updateUser,
        updateContainer:{
            update,setUpdate
        }
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Custom Hook to use UserContext
export const useUser = () => {
  return useContext(UserContext);
};
