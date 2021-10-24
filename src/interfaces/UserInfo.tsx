export interface UserInfo {
  firstname: string;
  lastname: string;
}

export interface UserHandler {
  user: UserInfo;
  setUser: React.Dispatch<UserInfo>;
}
