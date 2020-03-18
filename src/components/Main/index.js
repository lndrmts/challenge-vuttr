import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Tool from '../Tool';
import Filter from '../Filter';
import AddTool from '../AddTool';
import GlobalStyle from '../../styles/Global';

import MessageError from '../Messages/Error';
import MessageSucess from '../Messages/Sucess';

import { Container, Title, SubTitle, DisplayFlex } from './styles';

function App() {
  const [tool, setTool] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [removeTool, setRemoveTool] = useState(false);
  const [search, setSearch] = useState('');
  const [searchTagOnly, setSearchTagOnly] = useState('');
  const [message, setMessage] = useState('');

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeMessage() {
    setMessage('');
  }

  // List all tools
  useEffect(() => {
    api.get('/tools').then(res => {
      setTool(res.data);
    });
  }, [removeTool]);

  // Add new Tool
  function handleSubmit({ title, link, description, tags }) {
    const newtags = tags.split(', ');
    api
      .post(`/tools/`, {
        title,
        link,
        description,
        tags: newtags,
      })
      .then(() => {
        api.get('/tools').then(response => {
          setTool(response.data);
          setIsOpen(false);
          setMessage('success');
        });
      })
      .catch(e => {
        setMessage('error');
        setIsOpen(false);
        console.log(e);
      });
  }

  // Remove Tool
  function handleRemoveTool(id) {
    api
      .delete(`/tools/${id}`)
      .then(() => {
        setIsOpen(false);
        setRemoveTool(true);
        setMessage('success');
      })
      .catch(e => {
        setMessage('error');
        setIsOpen(false);
        console.log(e);
      });
  }

  // Search
  function handleChange(event) {
    setSearch(event.target.value);
  }

  // Search in tags only
  function handleInputChange(event) {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : true;

    setSearchTagOnly(value);
  }

  useEffect(() => {
    api
      .get(`/tools?${!searchTagOnly ? 'q' : 'tags_like'}=${search}`)
      .then(res => {
        setTool(res.data);
      });
  }, [search, searchTagOnly]);

  return (
    <>
      <GlobalStyle />
      {message === 'success' && <MessageSucess closeMessage={closeMessage} />}
      {message === 'error' && <MessageError closeMessage={closeMessage} />}
      <Container>
        <Title>VUTTR</Title>
        <SubTitle>Very Useful Tools to Remember</SubTitle>
        <DisplayFlex>
          <Filter
            handleChange={handleChange}
            handleInputChange={handleInputChange}
          />
          <AddTool
            handleSubmit={handleSubmit}
            openModal={openModal}
            closeModal={closeModal}
            modalIsOpen={modalIsOpen}
          />
        </DisplayFlex>
        {tool.map(t => (
          <Tool
            key={t.id}
            id={t.id}
            title={t.title}
            description={t.description}
            link={t.link}
            tags={t.tags}
            handleRemoveTool={handleRemoveTool}
            openModal={openModal}
            closeModal={closeModal}
            modalIsOpen={modalIsOpen}
          />
        ))}
      </Container>
    </>
  );
}

export default App;
