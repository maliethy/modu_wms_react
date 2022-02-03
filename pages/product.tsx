import React, { useState, useCallback } from 'react';
import GlobalLayout from '@layouts/GlobalLayout';
import styles from '@layouts/GlobalLayout/GlobalLayout.module.css';
import Table from '@components/Table';
import Modal from '@components/Modal';
function Product() {
  const [visibleModal, setVisibleModal] = useState(false);

  const handleModalVisible = useCallback(() => {
    setVisibleModal(true);
  }, []);
  return (
    <GlobalLayout>
      <button
        onClick={handleModalVisible}
        className="text-pink-500 bg-transparent border border-solid border-pink-500 hover:bg-pink-500 hover:text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
      >
        상품 추가하기
      </button>

      {visibleModal && <Modal setVisible={setVisibleModal} />}
      <div className="bg-white shadow-md rounded">
        <Table />
      </div>
    </GlobalLayout>
  );
}
export default Product;
