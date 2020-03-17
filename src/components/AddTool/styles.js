import styled from 'styled-components';

export const ButtonAdd = styled.button`
  background-color: #0dcb7d;
  border-radius: 5px;
  letter-spacing: 0.36px;
  color: #ffffff;
  font-size: 18px;
  border: none;
  line-height: 24px;
  padding: 14px 26px;
  cursor: pointer;
  @media (max-width: 768px) {
    position: fixed;
    bottom: 0;
    width: 100%;
    border-radius: 0;
    left: 0;
    z-index: 1;
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
