import { createHttpClient } from "./createHttpClient";

interface BaseFolderAPIProp {
  folderId: number;
}

interface FolderContentsDataForm {
  id: number;
  favorite: boolean;
  created_at: string;
  url: string;
  title: string;
  image_source: string;
  description: string;
}

interface PutRenameFolder {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  favorite: boolean;
}

export function folderAPI() {
  const folderAPI = "/folders";

  async function getFolders({ folderId }: { folderId: number }) {
    const baseHttp = createHttpClient();
    const query = folderId ? `/folders/${folderId}` : "";
    const response = await baseHttp.get<FolderContentsDataForm[]>(
      `${folderAPI}${query}/links`
    );
    return response;
  }

  // async function deleteFolder({ folderId }: { folderId: number }) {
  //   const baseHttp = createHttpClient();
  //   const response = await baseHttp.del(`${folderAPI}/${folderId}`);
  //   return response;
  // }

  // async function renameFolder({
  //   folderId,
  //   folderTitle,
  // }: {
  //   folderId: BaseFolderAPIProp;
  //   folderTitle: string;
  // }) {
  //   const baseHttp = createHttpClient();
  //   const response = await baseHttp.put<string, PutRenameFolder>(
  //     `${folderAPI}/${folderId}`,
  //     folderTitle
  //   );
  //   return response;
  // }

  // async function createNewFolder({ folderName }: { folderName: string }) {
  //   const baseHttp = createHttpClient();
  //   const response = await baseHttp.post(folderAPI, folderName);
  //   return response;
  // }

  // async function getFolderNameList({ userId }: { userId: number }) {
  //   const baseHttp = createHttpClient();
  //   const response = await baseHttp.get(`users/${userId}${folderAPI}`);
  //   return response;
  // }
}
