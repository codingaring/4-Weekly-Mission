import { axiosInstance } from "./axios/axiosInstance";

interface PutBookmarkRequest {
  code: string;
  details: string;
  hint: null;
  message: string;
}

export async function putBookmark({
  linkId,
  isFavorite,
}: {
  linkId: number;
  isFavorite: boolean;
}): Promise<PutBookmarkRequest> {
  const response = await axiosInstance.put(`/linkbrary/v1/links/${linkId}`, {
    favorite: isFavorite,
  });

  return response.data;
}
