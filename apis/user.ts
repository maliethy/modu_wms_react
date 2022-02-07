import setupAxios from './setupAxios';
import { PostSignInRequest, PostSignInResponse } from '@interfaces/user';

export async function postSignIn(data) {
  const response = setupAxios().post<PostSignInRequest, PostSignInResponse>('Web/SignIn', data);
  return response;
}
