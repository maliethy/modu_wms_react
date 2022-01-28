import react from 'react';

function Sidebar() {
  return (
    <aside
      id="sidebar"
      className="fixed hidden z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75"
      aria-label="Sidebar"
    >
      <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex-1 px-3 bg-white divide-y space-y-1">
            <ul className="space-y-3 pb-2 ">
              <li>
                <a
                  href="/products"
                  target="_blank"
                  className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                >
                  {/* icon */}
                  <span className="ml-3 flex-1 whitespace-nowrap">상품</span>
                </a>
              </li>
              <li>
                <a
                  href="/incoming"
                  target="_blank"
                  className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                >
                  {/* icon */}
                  <span className="ml-3 flex-1 whitespace-nowrap">입고</span>
                </a>
              </li>
              <li>
                <a
                  href="https://demo.themesberg.com/windster/users/list/"
                  className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                >
                  {/* icon */}
                  <span className="ml-3 flex-1 whitespace-nowrap">재고</span>
                </a>
              </li>
              <li>
                <a
                  href="https://demo.themesberg.com/windster/e-commerce/products/"
                  className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                >
                  {/* icon */}
                  <span className="ml-3 flex-1 whitespace-nowrap">이동</span>
                </a>
              </li>
            </ul>
            <ul className="space-y-3 pb-2 ">
              <li>
                <a
                  href="https://demo.themesberg.com/windster/authentication/sign-in/"
                  className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                >
                  {/* icon */}
                  <span className="ml-3 flex-1 whitespace-nowrap">발주</span>
                </a>
              </li>
              <li>
                <a
                  href="https://demo.themesberg.com/windster/authentication/sign-up/"
                  className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                >
                  {/* icon */}
                  <span className="ml-3 flex-1 whitespace-nowrap">출고</span>
                </a>
              </li>
              <li>
                <a
                  href="https://demo.themesberg.com/windster/authentication/sign-in/"
                  className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                >
                  {/* icon */}
                  <span className="ml-3 flex-1 whitespace-nowrap">반품</span>
                </a>
              </li>
              <li>
                <a
                  href="https://demo.themesberg.com/windster/authentication/sign-up/"
                  className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                >
                  {/* icon */}
                  <span className="ml-3 flex-1 whitespace-nowrap">교환</span>
                </a>
              </li>
            </ul>

            <div className="space-y-3 pt-2">
              <a
                href="https://demo.themesberg.com/windster/"
                className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
              >
                <span className="ml-3">관리</span>
              </a>
              <a
                href="/"
                target="_blank"
                className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2"
              >
                <span className="ml-3">문의</span>
              </a>
            </div>
            {/* <div className="space-y-3 pt-2">
              <a
                href="https://demo.themesberg.com/windster/"
                className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
              >
                <span className="ml-3">통계</span>
              </a>
              <a
                href="/"
                target="_blank"
                className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2"
              >
                <span className="ml-3">연동</span>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </aside>
  );
}
export default Sidebar;
