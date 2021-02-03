import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "0b677094-9c31-490c-95cf-fd5676c154ee",
  },
});

export const UsersAPI = {
  getUsers: (currentPage, pageSize) => {
    return axiosInstance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  getUserById: (userId) => {
    return axiosInstance
      .get(`profile/${userId}`)
      .then((response) => response.data);
  },
};

export const authAPI = {
  getAuthUser: () => {
    return axiosInstance.get("auth/me").then((response) => response.data);
  },
}; 

export const followAPI = {
  unfollow: (userId) => {
    return axiosInstance
      .delete(`follow/${userId}`)
      .then((response) => response.data);
  },
  follow: (userId) => {
    return axiosInstance
      .post(`follow/${userId}`)
      .then((response) => response.data);
  },
};
