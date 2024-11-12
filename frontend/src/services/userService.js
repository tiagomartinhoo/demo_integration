import axios from "axios";

//Endpoints
const API_BASE_URL = "https://a6d0-87-196-83-136.ngrok-free.app"; // TODO
const USERS_ENDPOINT = API_BASE_URL + "/rest/users"; // TODO

//Errors
const ERROR_CREATING_USER = "Error creating user: ";

/**
 * Function to create a new user
 *
 * @param {*} userData
 * @returns
 */
export const createUser = async (userData) => {
  try {
    const response = await axios.post(USERS_ENDPOINT, userData);
    return response.data;
  } catch (error) {
    alert(ERROR_CREATING_USER + error);
    throw error;
  }
};

/**
 * Function to get all users
 *
 * @returns {Promise<Array>} List of users
 */
export const getUsers = async () => {
  try {
    const response = await axios.get(USERS_ENDPOINT, {
      headers: {
        "ngrok-skip-browser-warning": "69420",
      },
    });
    return response.data;
  } catch (error) {
    alert("Error getting users: " + error);
    throw error;
  }
};

export const deleteUserHandle = async (userId) => {
  try {
    await axios.delete(`${USERS_ENDPOINT}/${userId}`);
  } catch (error) {
    alert("Error deleting user: " + error);
    throw error;
  }
};
