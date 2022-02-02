import React from 'react';
import RiBarChartHorizontalFill from '@meronex/icons/ri/RiBarChartHorizontalFill';
import Link from 'next/link';

function Headerbar({ handleVisibleSidebar }) {
  return (
    <nav className="bg-white border-b border-gray-200 fixed z-30 w-full">
      <div className="px-3 py-5 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-center tb:justify-between flex-wrap ">
          <div className="flex items-center mr-20 mb-2 sm:mb-0">
            <button
              id="toggleSidebarMobile"
              aria-expanded="true"
              aria-controls="sidebar"
              className="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100  rounded"
              onClick={handleVisibleSidebar}
            >
              <RiBarChartHorizontalFill />
            </button>
            <Link href="/">
              <a className="text-xl font-bold flex items-center lg:ml-2.5">
                <span className="self-center whitespace-nowrap">MODUMENT WMS</span>
              </a>
            </Link>
          </div>
          <div className="flex items-center justify-end">
            <button
              type="button"
              className="flex text-center items-center border text-base font-medium rounded text-black bg-white hover:bg-gray-100 py-1 mr-2"
            >
              <div className="border-r px-3 py-1">
                <span>서이천</span>
              </div>
              <div className="px-3 py-1">
                <span>센터장</span>
              </div>
            </button>
            <button
              type="button"
              className="flex text-center items-center border text-base font-medium rounded text-black bg-white hover:bg-gray-100 py-1 "
            >
              <div className="border-r px-3 py-1">
                <span>NA01</span>
              </div>
              <div className="px-3 py-1">
                <span>minions</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Headerbar;
