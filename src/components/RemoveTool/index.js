import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { Form } from '@rocketseat/unform';
import { ReactComponent as IconRemove } from '../../icons/iconRemove.svg';
import { ButtonRemove } from './styles';

Modal.setAppElement('#root');

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

function RemoveTool(props) {
  const { handleRemoveTool, id } = props;
  const [modalIsOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <ButtonRemove onClick={openModal} aria-label="Remove">
        <IconRemove /> remove
      </ButtonRemove>

      <Modal
        style={customStyles}
        isOpen={modalIsOpen}
        overlayClassName="overlay"
      >
        <h4>x Remove Tool</h4>
        <p>Are you sure what to remove Tool Name</p>
        <Form className="form">
          <button
            type="button"
            onClick={() => handleRemoveTool(id)}
            className="form__button danger pull-right"
          >
            Yes, remove
          </button>
          <button
            type="button"
            className="form__button pull-right"
            onClick={closeModal}
          >
            Cancel
          </button>
        </Form>
      </Modal>
    </>
  );
}
RemoveTool.propTypes = {
  handleRemoveTool: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};
export default RemoveTool;
