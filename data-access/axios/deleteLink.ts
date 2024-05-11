import { axiosInstance } from "./axiosInstance";

export async function deleteLink({ linkId }: { linkId: number }) {
  const response = await axiosInstance.delete(
    `/linkbrary/v1/folders/${linkId}`
  );

  return response.status;
}
