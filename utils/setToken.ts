import reactCookies from 'react-cookies';

let savedRefreshTokenExpireTime = [];
const onlyHTTPS = process.env.NODE_ENV === 'development' ? false : true;

function setToken(refreshToken: string, omsID?: number, refreshTokenExpireTime?: string) {
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
