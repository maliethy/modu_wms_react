import react from 'react';

function Footerbar() {
  return (
    <footer className="bg-white flex flex-col justify-center items-center tb:flex-row  tb:justify-between shadow rounded-lg p-4 md:p-6 md:p-8 my-6 mx-4">
      <ul className="flex items-center flex-wrap mb-6 tb:mb-0">
        <li>
          <a href="#" className="text-sm font-normal text-gray-500 hover:underline mr-4 tb:mr-6">
            회사소개
          </a>
        </li>
        <li>
          <a href="#" className="text-sm font-normal text-gray-500 hover:underline mr-4 tb:mr-6">
            이용약관
          </a>
        </li>
        <li>
          <a href="#" className="text-sm font-normal text-gray-500 hover:underline mr-4 tb:mr-6">
            개인정보 처리방침
          </a>
        </li>
        <li>
          <a href="#" className="text-sm font-normal text-gray-500 hover:underline mr-4 tb:mr-6">
            고객센터
          </a>
        </li>
      </ul>
      <div className="flex items-center">
        <a href="https://oms.modument.co.kr/" className="text-gray-500 hover:text-gray-900">
          OMS 바로가기
        </a>
      </div>
    </footer>
  );
}
export default Footerbar;
