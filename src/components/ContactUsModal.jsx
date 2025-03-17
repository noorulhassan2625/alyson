import React from 'react';
import { Modal } from 'antd';
import ContactUsModalContent from './ContactUsModalContent';

const ContactUsModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      open={isOpen}
      onOk={onClose}
      onCancel={onClose}
      cancelButtonProps={{ style: { display: 'none' } }}
      okButtonProps={{ style: { display: 'none' } }}
      width={'1000px'}
    >
      <ContactUsModalContent />
    </Modal>
  );
};

export default ContactUsModal;