import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { Form, Input } from '@rocketseat/unform';

import { ReactComponent as IconRemove } from '../../icons/iconRemove.svg';
import { ButtonAdd, ButtonModalClose } from './styles';

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

function AddTool(props) {
  const { handleSubmit, closeModal, openModal, modalIsOpen } = props;

  return (
    <>
      <ButtonAdd onClick={openModal}>+ Add</ButtonAdd>
      <Modal
        style={customStyles}
        isOpen={modalIsOpen}
        overlayClassName="overlay"
        id="addNewTool"
      >
        <h4>+ Add New Tool</h4>
        <ButtonModalClose
          type="button"
          onClick={closeModal}
          aria-label="Close Modal"
        >
          <IconRemove />
        </ButtonModalClose>

        <Form onSubmit={handleSubmit} className="form">
          <label htmlFor="title" className="form__label">
            Tool name <span>*</span>
            <Input
              id="title"
              className="form__input"
              name="title"
              type="text"
              required
            />
          </label>
          <label htmlFor="link" className="form__label">
            Tool Link <span>*</span>
            <Input
              id="link"
              className="form__input"
              name="link"
              type="text"
              required
            />
          </label>
          <label htmlFor="description" className="form__label">
            Tool Description <span>*</span>
            <Input
              multiline
              className="form__input"
              name="description"
              id="description"
              required
            />
          </label>
          <label htmlFor="tags" className="form__label">
            Tags <span>*</span>
            <Input
              id="tags"
              className="form__input"
              name="tags"
              type="text"
              required
            />
          </label>
          <button type="submit" className="form__button pull-right">
            Add Tool
          </button>
        </Form>
      </Modal>
    </>
  );
}

AddTool.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  modalIsOpen: PropTypes.bool.isRequired,
};

export default AddTool;
