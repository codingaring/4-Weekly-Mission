import { axiosInstance } from "./axiosInstance";

interface FolderOwnerProfile {
  id: number;
  created_at: string;
  name: string;
  image_source: string;
  email: string;
}

export async function getUserProfile({
  userId,
}: {
  userId: any;
}): Promise<FolderOwnerProfile> {
  const response = await axiosInstance.get(`/linkbrary/v1/users/${userId}`);
  return response.data[0];
}
