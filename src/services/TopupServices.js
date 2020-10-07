import http from "../http-common";

const getAll = () => {
  return http.get("/topup?limit=8");
};

const getId = (id) => {
  return http.get(`/topup/${id}`);
};

const create = (data) => {
  return http.post(`/topup`, data);
};

const update = (id, data) => {
  return http.patch(`/topup/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/topup/${id}`);
};

const getWithPage = (page, limit) => {
  return http.get(`/topup?page=${page}&limit=${limit}`);
};

export default {
  getAll,
  getId,
  create,
  update,
  remove,
  getWithPage,
};
