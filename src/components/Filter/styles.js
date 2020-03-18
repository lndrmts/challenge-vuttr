import styled from 'styled-components';

export const WrapperFilter = styled.section`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: baseline;
  }
`;

export const InputSearch = styled.input.attrs(() => ({
  type: 'text',
  placeholder: 'Search',
}))`
  background-color: #f5f4f6;
  border: 1px solid #ebeaed;
  border-radius: 5px;
  height: 50px;
  padding: 0 15px;
  color: #b1adb9;
  font-size: 20px;
  margin-right: 15px;
  max-width: 400px;
`;

export const InputSearchByTags = styled.input`
  margin-right: 8px;
  @media (max-width: 768px) {
    margin-top: 16px;
  }
`;

export const LabelSearchByTags = styled.label`
  color: #170c3a;
  font-size: 20px;
`;
