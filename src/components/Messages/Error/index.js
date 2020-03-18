import React from 'react';
import PropTypes from 'prop-types';
import { Message, Icon } from './styles';
import { ReactComponent as Close } from '../../../icons/close.svg';

const MessageError = props => {
  const { closeMessage } = props;
  return (
    <Message>
      Something terrible just happened
      <Icon>
        <Close onClick={closeMessage} />
      </Icon>
    </Message>
  );
};
MessageError.propTypes = {
  closeMessage: PropTypes.func.isRequired,
};
export default MessageError;
