import axios from "axios";

const API_URL = ""; // TODO
const USERS_PREFIX = ""; // TODO

// Function to create a new user
export const createUser = async (userData) => {
  try {
    const response = await axios.post(/*TODO*/);
    return response.data;
  } catch (error) {
    alert("Error creating user: " + error);
    throw error;
  }
};

// Function to get all users
export const getUsers = async () => {
  // TODO

  // acrescentar nas headers: "ngrok-skip-browser-warning": "69420"
};
