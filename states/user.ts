import { atom } from 'recoil';

export const userState = atom({
  key: 'userState',
  default: { accessToken: '', omsID: 0, permission: '' },
});
