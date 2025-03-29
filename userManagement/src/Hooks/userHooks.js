import { useState, useEffect } from "react";
import { createContext, useContext } from "react";

import { fetchUserList } from "../api/userapi";

export const UserList = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const getUserData = async () => {
    try {
      const data = await fetchUserList(page);
      setUser(data);
    } catch (err) {
      setError(err);
    }
  };
  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      await getUserData();
      setLoading(false);
    };
    fetch();
  }, [page]);
  //   setUser by page
  const nextPage = (page) => {
    setPage(page);
  };
  return { user, loading, error, nextPage };
};

export const UpdateUserHook = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    // console.log("value of user ", user);
  }, [user]);
  const updateUser = (newData) => {
    setUser((prevUser) => ({ ...prevUser, ...newData }));
  };

  const updateUserField = (field, value) => {
    setUser((prevUser) => ({
      ...prevUser,
      [field]: value, // Update only one field dynamically
    }));
  };

  return { user, setUser, updateUser, updateUserField };
};

// Creating the context
