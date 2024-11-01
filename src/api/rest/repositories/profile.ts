import axiosInstance from "~/config/axiosInstance";

import { PROFILE_ENDPOINTS } from "~/rest/endpoints";

export const getProfile = async (id:number) => {
  const { data: response } = await axiosInstance.get(PROFILE_ENDPOINTS.getUser + id);
  return response.data;
};