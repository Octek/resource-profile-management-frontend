import { useMutation } from "@tanstack/react-query";
import { getProfile } from "~/rest/repositories/profile";


export const useGetProfile = () => {
  return useMutation<any, unknown, { id: number }>(
    ['getProfile'],
    ({ id }) => {
      return getProfile(id);
    }
  );
};


