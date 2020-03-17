import styled from 'styled-components';

export const Card = styled.article`
  background-color: #ffffff;
  box-shadow: 0px 15px 20px #00000012;
  border: 1px solid #ebeaed;
  border-radius: 5px;
  padding: 15px;
  margin-top: 35px;
  position: relative;
  h5 {
    font-size: 24px;
    color: #170c3a;
    margin: 0;
  }
  p {
    margin-top: 5px;
  }
`;

export const Tags = styled.p`
  margin-top: 15px;
  strong + strong {
    margin-left: 10px;
  }
`;
