import React from 'react';
import MdOpen from '@meronex/icons/ios/MdOpen';

function MenuCard() {
  return (
    <div className="bg-white shadow rounded-lg px-4 py-16 sm:p-6 xl:p-8 mx-3 my-4 tb:mx-0 tb:my-0 ">
      <div className="flex items-start">
        <div className="flex flex-wrap">
          <div className="flex-shrink-0">
            <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900 tb:mr-12">상품</span>
          </div>
          <div className="hidden tb:block">
            <h3 className="text-base font-normal text-gray-500">메뉴1</h3>
            <h3 className="text-base font-normal text-gray-500">메뉴1</h3>
            <h3 className="text-base font-normal text-gray-500">메뉴1</h3>
            <h3 className="text-base font-normal text-gray-500">메뉴1</h3>
          </div>
        </div>
        <div className="ml-5 flex justify-end flex-1 text-green-500 text-2xl w-full h-full font-bold">
          <MdOpen />
        </div>
      </div>
    </div>
  );
}
export default MenuCard;
