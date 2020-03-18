import React from 'react';
import PropTypes from 'prop-types';
import RemoveTool from '../RemoveTool';
import { Card, Tags } from './styles';

function Tool(props) {
  const { title, description, link, tags } = props;
  const { handleRemoveTool, openModal, closeModal, modalIsOpen, id } = props;
  return (
    <>
      <Card>
        <RemoveTool
          handleRemoveTool={handleRemoveTool}
          openModal={openModal}
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
          id={id}
        />
        <h5>
          <a href={link} title={title}>
            {title}
          </a>
        </h5>
        <p>{description}</p>
        <Tags>
          {tags.map(tag => (
            <strong key={tag}>#{tag}</strong>
          ))}
        </Tags>
      </Card>
    </>
  );
}

Tool.propTypes = {
  handleRemoveTool: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  modalIsOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string,
  tags: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
};
export default Tool;
