import axios from "axios";
import { getApiUrl } from "./serviceWrapper";

export const fetchPostDet = async (payload) => {
  try {
    const response = await axios.post(getApiUrl("/post/getPosts"), payload);
    return response.data;
  } catch (err) {
    throw err.message;
  }
};

export const createNewPost = async (payload) => {
  try {
    const response = await axios.post(getApiUrl("/post/create"), payload);
    return response.data;
  } catch (err) {
    throw err.message;
  }
};

export const updatePost = async (payload) => {
  try {
    const response = await axios.post(getApiUrl("/post/update"), payload);
    return response.data;
  } catch (err) {
    throw err.message;
  }
};

export const deletePost = async (payload) => {
  try {
    const response = await axios.post(getApiUrl("/post/delete"), payload);
    return response.data;
  } catch (err) {
    throw err.message;
  }
};
