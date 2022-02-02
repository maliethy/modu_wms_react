import React from 'react';
import GlobalLayout from '@layouts/GlobalLayout';
import MenuCard from '@components/MenuCard';

function Homepage() {
  return (
    <GlobalLayout>
      <div className=" mt-28 px-8">
        <div className="w-full grid grid-cols-3 tb:grid-cols-2 xl:grid-cols-4 gap-8">
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
        </div>
      </div>
    </GlobalLayout>
  );
}
export default Homepage;
