export interface RedirectTo {
  app: string;
  name: string;
}

export interface UserInformation {
  name: string;
  role: string;
  redirect_to: RedirectTo;
}

export type UserStatus = 'ACTIVE' | 'CHANGE_PASSWORD';

export interface LoginResponse {
  data: {
    user_information: UserInformation;
    status: UserStatus;
    token: string;
  };
}

export interface LoginPayload {
  user: UserInformation;
  status: UserStatus;
  token: string;
}
