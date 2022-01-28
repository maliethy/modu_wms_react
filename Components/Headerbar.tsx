import react from 'react';

function Headerbar() {
  return (
    <nav className="bg-white border-b border-gray-200 fixed z-30 w-full">
      <div className="px-3 py-5 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <button
              id="toggleSidebarMobile"
              aria-expanded="true"
              aria-controls="sidebar"
              className="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded"
            >
              {/* mobile toggle bar*/}
              <span>bar</span>
              {/* mobile close button */}
            </button>
            <a href="https://demo.themesberg.com/windster/" className="text-xl font-bold flex items-center lg:ml-2.5">
              {/* logo */}
              <span className="self-center whitespace-nowrap">MODUMENT WMS</span>
            </a>
          </div>
          <div className="flex items-center">
            <button
              id="toggleSidebarMobileSearch"
              type="button"
              className="lg:hidden text-gray-500 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-lg"
            >
              <span className="sr-only">Search</span>
              {/* <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg> */}
            </button>
            <div className="flex items-center">
              <span className="text-base font-normal text-gray-500 mr-5">센터: 서이천</span>
              <div className="mr-5">
                <span>관리자: minions(NA01)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Headerbar;
