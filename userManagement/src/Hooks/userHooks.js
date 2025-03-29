import { useState, useEffect } from "react";
import { createContext, useContext } from "react";

import { DeleteUser, fetchUserList } from "../api/userapi";

export const UserList = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPage,setTotalPage] = useState(0)
  const [deletedRow, setDeletedRow] = useState(null);
  const getUserData = async () => {
    try {
      const data = await fetchUserList(page);
      setUser(data.data);
      setTotalPage(2)
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
  const handelDelete = async (id) => {
    try {
      console.log("Deleting user:", id);
      setUser((prevUsers) => prevUsers.filter((user) => user.id !== id)); 
      setDeletedRow(null); 
    } catch (err) {
      console.log("Delete Error:", err);
    }
  };
  return { user, loading, error, totalPage ,nextPage, handelDelete };
};

// Creating the context
