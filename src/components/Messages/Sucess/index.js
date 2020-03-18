import React from 'react';
import PropTypes from 'prop-types';
import { Message, Icon } from './styles';
import { ReactComponent as Close } from '../../../icons/close.svg';

const MessageSucess = props => {
  const { closeMessage } = props;
  return (
    <Message>
      Something sucessful just happened
      <Icon>
        <Close onClick={closeMessage} />
      </Icon>
    </Message>
  );
};
MessageSucess.propTypes = {
  closeMessage: PropTypes.func.isRequired,
};
export default MessageSucess;
