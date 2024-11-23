import axios from "axios";
import { getApiUrl } from "./serviceWrapper";

export const fetchUserDetails = async (payload) => {
  try {
    const response = await axios.post(getApiUrl("/user/getUser"), payload);
    return response.data;
  } catch (err) {
    console.log("errorrrrr", err);
    throw err.message;
  }
};
