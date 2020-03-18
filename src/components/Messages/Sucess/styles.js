import styled from 'styled-components';

export const Message = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: #12db89;
  text-align: center;
  font-size: 20px;
  letter-spacing: 0.4px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 9;
`;

export const Icon = styled.span`
  position: absolute;
  right: 2rem;
  cursor: pointer;
`;
