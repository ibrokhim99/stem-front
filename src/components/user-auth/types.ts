export type UserInfo = {
  role: string;
  auth_method: string;
  password: string;
  email?: string;
  phone?: string;
  fio: string;
  occupation: string;
  code_hash?: any;
};

export type UserAuthContextValue = {
  userInfo: UserInfo | null;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfo | null>>;
};
