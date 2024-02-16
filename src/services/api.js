import { fetchAdvert } from "./baseUrl";

export const getAllAdvert = async (page) => {
  const { data } = await fetchAdvert.get(`/advert?limit=12&p=${page}`);

  return data;
};

export const updateCarById = async (carId) => {
  const { data } = await fetchAdvert.patch("/advert", carId);
  return data;
};
