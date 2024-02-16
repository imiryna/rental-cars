import { fetchAdvert } from "./baseUrl";

export const getAllAdvert = async (page) => {
  const { data } = await fetchAdvert.get(`/advert?limit=12&p=${page}`);

  return data;
};

export const getCarById = async (carId) => {
  const { data } = await fetchAdvert.get(`/advert?id=${carId}`);
  return data.pop();
};
