export const getApiUrl = (endPoint) => {
  const BASE_URL = "http://localhost:5000";
  return `${BASE_URL}${endPoint}`;
};
