import React from 'react';
import Link from 'next/link';

function Sidebar({ visible }) {
  return (
    <aside
      id="sidebar"
      className={`fixed  ${
        !visible ? '-translate-x-full' : 'translate-x-0'
      } lg:translate-x-0 z-20 h-full transform top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 ease-in-out transition-width duration-500`}
      aria-label="Sidebar"
    >
      <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex-1 px-3 bg-white divide-y space-y-1">
            <ul className="space-y-3 pb-2">
              <li>
                <Link href="/product">
                  <a className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ">
                    {/* icon */}
                    <span className="ml-3 flex-1 whitespace-nowrap">상품</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/incoming">
                  <a
                    target="_blank"
                    className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                  >
                    {/* icon */}
                    <span className="ml-3 flex-1 whitespace-nowrap">입고</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/stock">
                  <a className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ">
                    {/* icon */}
                    <span className="ml-3 flex-1 whitespace-nowrap">재고</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/location">
                  <a className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ">
                    {/* icon */}
                    <span className="ml-3 flex-1 whitespace-nowrap">이동</span>
                  </a>
                </Link>
              </li>
            </ul>
            <ul className="space-y-3 py-2">
              <li>
                <Link href="/order">
                  <a className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ">
                    {/* icon */}
                    <span className="ml-3 flex-1 whitespace-nowrap">발주</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/delivery">
                  <a className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ">
                    {/* icon */}
                    <span className="ml-3 flex-1 whitespace-nowrap">출고</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/return">
                  <a className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ">
                    {/* icon */}
                    <span className="ml-3 flex-1 whitespace-nowrap">반품</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/exchange">
                  <a className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ">
                    {/* icon */}
                    <span className="ml-3 flex-1 whitespace-nowrap">교환</span>
                  </a>
                </Link>
              </li>
            </ul>
            <div className="space-y-3 pt-2">
              <Link href="/setting">
                <a className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ">
                  {/* icon */}
                  <span className="ml-3 flex-1 whitespace-nowrap">관리</span>
                </a>
              </Link>
              <Link href="/inquiry">
                <a className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ">
                  {/* icon */}
                  <span className="ml-3 flex-1 whitespace-nowrap">문의</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
export default Sidebar;
