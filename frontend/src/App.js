import React, { useState } from 'react';
import shortenService from './services/shorten';
import './App.css';
import { Row, Typography, Input, Button } from 'antd';

const { Title } = Typography;

const App = (props) => {
  const [input, setInput] = useState('');
  const [shortenUrl, setShortenUrl] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const UrlToShorten = {
      url: input,
    }

    const response = await shortenService.shortenUrl(UrlToShorten);
    console.log(response);
    setShortenUrl(response.shortenUrl);
    console.log(shortenUrl);
    setInput('');
    
  }

  const displayShortenUrl = () => {
    const host = window.location.href;
    return (
      <Row type="flex" justify="center">
        <Title>{host}{shortenUrl}</Title>
      </Row>
    )
  }

  return (
    <div>
      <Row type="flex" justify="center">
        <Title>Url Shortener</Title>
      </Row>
      <Row type="flex" justify="center">
        <form onSubmit={handleSubmit}>
          <label>Enter a valid URL:</label>
          <Input onChange={event => setInput(event.target.value)} placeholder="www.google.com" value={input}/>
          <Button htmlType="submit">Shorten!</Button>
        </form>
      </Row>
      {shortenUrl ? displayShortenUrl() : <div></div>}
    </div>
  );
}

export default App;
