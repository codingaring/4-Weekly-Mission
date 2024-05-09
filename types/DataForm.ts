//favorite, link, name, user_id

//getFolders
export interface getFolderDataForm {
  created_at: string;
  description: string;
  folder_id: number;
  id: number;
  image_source: string;
  title: string;
  updated_at: string;
  url: string;
}

// useGetFolder
export interface FolderPageDataForm {
  //folder []
  count: number;
  id: number;
  name: string;
  owner: {
    id: number;
    name: string;
    profileImageSource: string;
  };
  links: LinkDataForm[];
}

export interface LinkDataForm {
  id: number;
  createdAt: string;
  description: string;
  imageSource: string;
  url: string;
  title: string;
}

//useGetUser
export interface UserDataForm {
  // data []
  auth_id: string;
  created_at: string;
  email: "string";
  id: number;
  image_source: string;
  name: string;
}

// userInfoData
export interface UserInfo {
  email: string;
  imageSource: string;
}

//
export interface CardInfoDataForm {
  url: string;
  image_source: string;
  description: string;
  created_at: string;
}

// getLoginUserInfo
export interface GetUserInfoForm {
  auth_id: string;
  created_at: string;
  email: string;
  image_source: string;
  name: string;
}

// useGetUserInfo
export interface UseGetUserInfo {
  auth_id: string;
  created_at: string;
  profile: {
    email: string;
    image_source: string;
    name: string;
  };
}
