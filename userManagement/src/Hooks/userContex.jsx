import { createContext, useContext, useState, useEffect } from "react";
import { DeleteUser, fetchUserList } from "../api/userapi";

const UserContext = createContext();

// Provider component
export const UserProvider = ({ children }) => {
  const [userList, setUserList] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [update, setUpdate] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);

  const getUserData = async () => {
    try {
      setLoading(true);
      const data = await fetchUserList(page);
      setUserList(data.data);
      setTotalPage(2);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserData();
  }, [page]);

  // Delete User
  const handleDelete = async (id) => {
    try {
      await DeleteUser(id);
      setUserList((prevUsers) => prevUsers.filter((user) => user.id !== id));
      if (selectedUser?.id === id) setSelectedUser(null);
    } catch (err) {
      console.error("Delete Error:", err);
    }
  };

  const selectUser = (user) => {
    setOpenUpdate(true);
    setSelectedUser(user);
  };

  // Update User
  const updateSingleUser = (newData) => {
    setUpdate(true);
    setUserList((prevList) =>
      prevList.map((user) =>
        user.id === newData.id ? { ...user, ...newData } : user
      )
    );
    setSelectedUser(newData);
  };
  const closeUpdate = () => {
    setOpenUpdate(false);
    setSelectedUser(null);
  };

  return (
    <UserContext.Provider
      value={{
        userList,
        selectedUser,
        selectUser,
        loading,
        error,
        totalPage,
        setSelectedUser,
        page,
        openUpdate,
        closeUpdate,
        setPage,
        handleDelete,
        updateSingleUser,
        updateContainer: { update, setUpdate },
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export const useUser = () => {
  return useContext(UserContext);
};
