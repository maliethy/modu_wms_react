import React, { ReactNode, useState, useCallback, useEffect } from 'react';
import Headerbar from '../../components/Headerbar';
import Sidebar from '../../components/Sidebar';
import Footerbar from '../../components/Footerbar';

interface GlobalLayoutProps {
  children: ReactNode;
}
function GlobalLayout({ children }: GlobalLayoutProps) {
  const [visible, setVisible] = useState(false);

  const handleVisibleSidebar = useCallback(() => {
    window?.innerWidth < 1024 && setVisible((prev) => !prev);
  }, []);

  useEffect(() => {
    if (window) {
      const checkInnerWidth = function () {
        if (window?.innerWidth < 1024) {
          setVisible(false);
        } else {
          setVisible(true);
        }
      };
      window?.addEventListener('resize', checkInnerWidth);
      return () => window.removeEventListener('resize', checkInnerWidth);
    }
  }, []);

  return (
    <div>
      <Headerbar handleVisibleSidebar={handleVisibleSidebar} />
      <Sidebar visible={visible} />
      <div className="flex overflow-hidden bg-gray-50 pt-12 xs:pt-18">
        <div className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>
        <div
          onClick={handleVisibleSidebar}
          id="main-content"
          className="h-full w-full relative overflow-y-auto lg:ml-64 mt-20 sm:mt-18 px-8"
        >
          {children}
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
    </div>
  );
}
export default GlobalLayout;
