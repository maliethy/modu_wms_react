import React from 'react';
import GlobalLayout from '@layouts/GlobalLayout';
import MenuCard from '@components/MenuCard';

function Homepage() {
  return (
    <GlobalLayout>
      <main>
        <div className="pt-14 tb:pt-12 px-4">
          <div className="mt-4 w-full grid grid-cols-3 tb:grid-cols-2 xl:grid-cols-4 gap-8">
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
      </main>
    </GlobalLayout>
  );
}
export default Homepage;
