import axios from "axios";

//Endpoints
const API_BASE_URL = ""; // TODO
const USERS_ENDPOINT = API_BASE_URL + ""; // TODO


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
    const response = await axios.post(/*TODO*/);
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
  /* TODO */
  // Atention! You should add the following header -> "ngrok-skip-browser-warning": "69420"
};
