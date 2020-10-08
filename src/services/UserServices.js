import http from "../http-common";

const getAll = () => {
  return http.get("/user?limit=4");
};

const getId = (id) => {
  return http.get(`/user/${id}`);
};

const create = (data) => {
  return http.post(`/user`, data);
};

const update = (id, data) => {
  return http.patch(`/user/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/user/${id}`);
};

const findByName = (name) => {
  return http.get(`/user?name=${name}`);
};

export default {
  getAll,
  getId,
  create,
  update,
  remove,
  findByName,
};
