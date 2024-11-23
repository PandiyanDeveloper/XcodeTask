import axios from "axios";
import { getApiUrl } from "./serviceWrapper";

export const fetchHighlightsDet = async (payload) => {
  try {
    const response = await axios.post(getApiUrl("/getHighlights"), payload);
    return response.data;
  } catch (err) {
    throw err.message;
  }
};
