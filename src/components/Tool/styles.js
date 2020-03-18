import styled from 'styled-components';

export const Card = styled.article`
  background-color: #ffffff;
  box-shadow: 0px 15px 20px #00000012;
  border: 1px solid #ebeaed;
  border-radius: 5px;
  padding: 15px;
  margin-top: 35px;
  position: relative;
  h5 a {
    font-size: 24px;
    color: #244aa8;
    margin: 0;
    text-decoration: none;
    &:hover {
      color: #8f8a9b;
    }
  }
  p {
    margin-top: 5px;
  }
`;

export const Tags = styled.p`
  margin-top: 15px;
  color: #6554c0;
  strong + strong {
    margin-left: 10px;
  }
`;
