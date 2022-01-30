import React, { ReactNode, useState, useCallback, useEffect } from 'react';
import Headerbar from '../components/Headerbar';
import Sidebar from '../components/Sidebar';
import Footerbar from '../components/Footerbar';

interface GlobalLayoutProps {
  children: ReactNode;
}
function GlobalLayout({ children }: GlobalLayoutProps) {
  const [visible, setVisible] = useState(false);

  const handleVisibleSidebar = useCallback(() => {
    window?.innerWidth < 1024 && setVisible((prev) => !prev);
  }, []);

  // useEffect(() => {
  //   console.log('visible', visible);
  // }, [visible]);

  useEffect(() => {
    if (window?.innerWidth < 1024) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }, []);

  return (
    <div>
      <Headerbar handleVisibleSidebar={handleVisibleSidebar} />
      <Sidebar visible={visible} />
      <div className="flex overflow-hidden bg-white pt-20 xs:pt-18">
        <div className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>
        <div
          onClick={handleVisibleSidebar}
          id="main-content"
          className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64"
        >
          <div>{children}</div>
          <Footerbar />
          <p className="text-center text-sm text-gray-500 my-10">
            &copy; 2022{' '}
            <a href="#" className="hover:underline" rel="noreferrer" target="_blank">
              Modument
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
