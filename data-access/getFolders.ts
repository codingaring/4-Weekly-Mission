import { createHttpClient } from "./createHttpClient";

export interface FolderContentsDataForm {
  id: number;
  favorite: boolean;
  created_at: string;
  url: string;
  title: string;
  image_source: string;
  description: string;
}

// export async function getFolders({ folderId }: { folderId: number }) {
//   const baseHttp = createHttpClient();
//   const query = folderId ? `/folders/${folderId}` : "";
//   const response = await baseHttp.get<FolderContentsDataForm[]>(
//     `/${query}/links`
//   );
//   return response;
// }
