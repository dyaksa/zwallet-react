import http from "../http-common";

const getAll = () => {
  return http.get("/transfer?limit=4");
};

const getId = (id) => {
  return http.get(`/transfer/${id}`);
};

const create = (data) => {
  return http.post(`/transfer`, data);
};

const update = (id, data) => {
  return http.patch(`/transfer/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/transfer/${id}`);
};

const findByName = (name) => {
  return http.get(`/transfer?name=${name}`);
};

export default {
  getAll,
  getId,
  create,
  update,
  remove,
  findByName,
};