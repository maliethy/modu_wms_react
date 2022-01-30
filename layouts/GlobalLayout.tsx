import React, { ReactNode, useState, useCallback, useEffect } from 'react';
import Headerbar from '../Components/Headerbar';
import Sidebar from '../Components/Sidebar';
import Footerbar from '../Components/Footerbar';
import getWindowDimensions from '@utils/getWindowDimensions';

interface GlobalLayoutProps {
  children: ReactNode;
}
function GlobalLayout({ children }: GlobalLayoutProps) {
  const [visible, setVisible] = useState(true);

  const handleVisibleSidebar = useCallback(() => {
    setVisible((prev) => !prev);
  }, []);

  // useEffect(() => {
  //   console.log('visible', visible);
  // }, [visible]);

  useEffect(() => {
    if (getWindowDimensions()?.width < 1024) {
      setVisible(false);
    } else {
      setVisible(true);
    }
    // console.log(getWindowDimensions().width);
  }, []);

  return (
    <div>
      <Headerbar handleVisibleSidebar={handleVisibleSidebar} />
      <Sidebar visible={visible} />
      <div className="flex overflow-hidden bg-white pt-28 xs:pt-16">
        <div className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>
        <div id="main-content" className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
          <div>{children}</div>
          <Footerbar />
          <p className="text-center text-sm text-gray-500 my-10">
            &copy; 2022{' '}
            <a href="https://themesberg.com" className="hover:underline" rel="noreferrer" target="_blank">
              modument
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
      <script async defer src="https://buttons.github.io/buttons.js"></script>
    </div>
  );
}
export default GlobalLayout;
