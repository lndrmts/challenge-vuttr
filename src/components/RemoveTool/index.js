import React, { useState } from 'react';
import Modal from 'react-modal';
import { Form } from '@rocketseat/unform';
import { ReactComponent as IconRemove } from '../../icons/iconRemove.svg';
import { ButtonRemove, ButtonModalClose } from './styles';

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#170C3A',
    zIndex: 9,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function RemoveTool() {
  const [modal, setModal] = useState(false);

  function handleSubmit(data) {
    console.log(data);
    // { email: 'test@example.com', password: '123456' }
  }

  return (
    <>
      <ButtonRemove onClick={() => setModal(true)} aria-label="Remove">
        <IconRemove /> remove
      </ButtonRemove>

      <Modal style={customStyles} isOpen={modal} overlayClassName="overlay">
        <h4>x Remove Tool</h4>
        <p>Are you sure what to remove Tool Name</p>
        <Form onSubmit={handleSubmit} className="form">
          <button
            type="button"
            className="form__button danger pull-right"
            onClick={() => setModal(false)}
          >
            Yes, remove
          </button>
          <button
            type="button"
            className="form__button pull-right"
            onClick={() => setModal(false)}
          >
            Cancel
          </button>
        </Form>
      </Modal>
    </>
  );
}

export default RemoveTool;
