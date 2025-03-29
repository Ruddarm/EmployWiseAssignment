import axiosInstance from "./apiInstance";

// fetch user by list
async function fetchUserList(page) {
  try {
    const response = await axiosInstance.get(`/api/users?page=${page}`);
    return response.data;
  } catch (err) {
    console.log("Error while fetching user list ", err);
    throw err;
  }
}

// user by id
function GetuserById() {}

// user by name
function GetuserByName() {}

//update user information
function UpdateUser() {}

// Delete suer
async function DeleteUser(id) {
  const response = await axiosInstance.delete(`api/users/${id}`);
  console.log(response)
  return response.data;
}

export { fetchUserList  , DeleteUser};
