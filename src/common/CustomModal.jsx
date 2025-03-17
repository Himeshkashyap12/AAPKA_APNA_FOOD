import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import CustomHeading from './CustomHeading';
const CustomModal = ({footer,open,setOpen,value,modalBody}) => {  
  const handleOk = () => {
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  return (
    <>
     
      <Modal
        title={<CustomHeading level={3} value={value}/>}
        open={open}
        onOk={handleOk}
        onCancel={()=>{setOpen(false)}}
        footer={footer??true}
      >
       {modalBody}
      </Modal>
    </>
  );
};
export default CustomModal;