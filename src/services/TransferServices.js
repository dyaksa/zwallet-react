import http from "../http-common";

const getAll = () => {
  return http.get("/user");
};

const getId = (id) => {
  return http.get(`/user/${id}`);
};

const create = (data) => {
  return http.post(`/user`, data);
};
