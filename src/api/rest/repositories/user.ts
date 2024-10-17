import axiosInstance from "~/config/axiosInstance";

import { AUTH_ENDPOINTS } from "~/rest/endpoints";

export const addUser = async (body: any) => {
  const { data: response } = await axiosInstance.post(
    AUTH_ENDPOINTS.login,
    body
  );
  return response;
};
