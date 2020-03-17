import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    min-height: 100%;
  }
  body {
    font-family: 'Source Sans Pro';
    font-size: 20px;
    background-color: #B9C6FA;
  }
  h4 {
    font-size: 26px;
  }
  .form {
    margin: 30px 0;
  }
  .form__input {
   background-color: #f5f4f6;
    border: 1px solid #ebeaed;
    border-radius: 5px;
    opacity: 1;
    padding: 13px 21px 12px;
    width: 100%;
    margin-top: 8px;
  }
  .form__label {
    font-size: 20px;
    line-height: 26px;
    letter-spacing: 0.4px;
    color: #170C3A;
    margin-bottom: 8px;
    display: block;
  }
  .form__button {
    background-color: #0DCB7D;
    border-radius: 5px;
    text-align: center;
    font-size: 18px;
    line-height:24px;
    letter-spacing: 0.36px;
    color: #FFFFFF;
    padding: 14px 26px;
    cursor: pointer;
    border: none;
    &+.form__button {
      margin-right: 15px;
    }
    &.pull-right  {
      float: right;
    }
    &.danger {
      background-color: #F95E5A;
    }
  }
`;
