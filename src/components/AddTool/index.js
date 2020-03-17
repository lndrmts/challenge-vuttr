import React, { useState } from 'react';
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

function AddTool() {
  const [modal, setModal] = useState(false);

  function handleSubmit(data) {
    console.log(data);
    // { email: 'test@example.com', password: '123456' }
  }

  return (
    <>
      <ButtonAdd onClick={() => setModal(true)}>+ Add</ButtonAdd>
      <Modal style={customStyles} isOpen={modal} overlayClassName="overlay">
        <h4>+ Add New Tool</h4>
        <ButtonModalClose
          type="button"
          onClick={() => setModal(false)}
          aria-label="Close Modal"
        >
          <IconRemove />
        </ButtonModalClose>

        <Form onSubmit={handleSubmit} className="form">
          <label htmlFor="toolName" className="form__label">
            Tool name
            <Input
              id="toolName"
              className="form__input"
              name="toolName"
              type="text"
            />
          </label>
          <label htmlFor="toolLink" className="form__label">
            Tool Link
            <Input
              id="toolLink"
              className="form__input"
              name="toolLink"
              type="text"
            />
          </label>
          <label htmlFor="toolDescription">
            Tool Description
            <Input
              multiline
              className="form__input"
              name="toolDescription"
              id="toolDescription"
            />
          </label>
          <label htmlFor="toolLink" className="form__label">
            Tags
            <Input
              id="toolTags"
              className="form__input"
              name="toolTags"
              type="text"
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

export default AddTool;
