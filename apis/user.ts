import { axiosApiInstance } from './index';
import { PostSignInRequest, PostSignInResponse } from '@interfaces/user';

export async function postSignIn(data) {
  const response = axiosApiInstance.post<PostSignInRequest, PostSignInResponse>('Web/SignIn', data);
  return response;
}
