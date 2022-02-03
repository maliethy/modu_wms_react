import reactCookies from 'react-cookies';

let savedRefreshTokenExpireTime = [];
const onlyHTTPS = process.env.NODE_ENV === 'development' ? false : true;

function setToken(omsID: number, refreshToken: string, refreshTokenExpireTime?: string) {
  if (refreshTokenExpireTime) {
    savedRefreshTokenExpireTime.push(new Date(refreshTokenExpireTime));
  }

  reactCookies.save('refreshToken', refreshToken, {
    path: '/',
    expires: savedRefreshTokenExpireTime[0],
    secure: onlyHTTPS,
  });
  reactCookies.save('omsID', omsID, {
    path: '/',
    expires: savedRefreshTokenExpireTime[0],
    secure: onlyHTTPS,
  });
}

export default setToken;
