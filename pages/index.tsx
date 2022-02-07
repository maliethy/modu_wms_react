import React, { useCallback } from 'react';
import GlobalLayout from '@layouts/GlobalLayout';
import styles from '@layouts/GlobalLayout/GlobalLayout.module.css';
import MenuCard from '@components/MenuCard';
import { postSignIn } from '@apis/user';
import setToken from '@utils/setToken';
import { userState } from '@states/user';
import { useSetRecoilState } from 'recoil';

function Homepage() {
  const setUserState = useSetRecoilState(userState);
  const handlePostSignIn = useCallback(() => {
    postSignIn({
      userID: 'test',
      pwd: 'test',
    })
      .then((res) => {
        setUserState({
          accessToken: res.data.accessToken,
          omsID: res.data.omsID,
          permission: res.data.permission,
        });
        setToken(res.data.refreshToken, res.data.omsID, res.data.refreshTokenExpireTime);
      })
      .catch((err) => {
        console.error('err', err);
      })
      .finally(() => {
        console.log('finally');
      });
  }, []);

  return (
    <GlobalLayout>
      <div className="w-full grid grid-cols-3 tb:grid-cols-2 xl:grid-cols-4 gap-8">
        <button onClick={handlePostSignIn}>로그인</button>
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
      </div>
    </GlobalLayout>
  );
}
export default Homepage;
