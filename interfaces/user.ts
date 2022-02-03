export interface PostSignInRequest {
  userID: string;
  pwd: string;
  accessToken?: string;
}

export interface PostSignInResponse {
  data: {
    omsID: number;
    permission: 'SUPERADMIN' | 'ADMIN' | 'AGENCY' | 'WORKER' | 'USER' | 'GUEST';
    accessToken: string;
    accessTokenExpireTime: string;
    refreshToken: string;
    refreshTokenExpireTime: string;
  };
}
