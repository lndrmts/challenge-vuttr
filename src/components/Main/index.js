import React from 'react';
import Tool from '../Tool';
import Filter from '../Filter';
import AddTool from '../AddTool';
import GlobalStyle from '../../styles/Global';

import { Container, Title, SubTitle, DisplayFlex } from './styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>VUTTR</Title>
        <SubTitle>Very Useful Tools to Remember</SubTitle>
        <DisplayFlex>
          <Filter />
          <AddTool />
        </DisplayFlex>
        <Tool />
        <Tool />
        <Tool />
      </Container>
    </>
  );
}

export default App;
