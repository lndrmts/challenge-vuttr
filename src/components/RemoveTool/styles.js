import styled from 'styled-components';

export const ButtonRemove = styled.button`
  position: absolute;
  right: 15px;
  border: none;
  background-color: transparent;
  border-radius: 5px;
  font-size: 18px;
  letter-spacing: 0.36px;
  color: #f95e5a;
  cursor: pointer;
  svg {
    width: 12px;
    height: 12px;
    margin-right: 6px;
  }
`;

export const ButtonModalClose = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  svg {
    width: 18px;
  }
`;
