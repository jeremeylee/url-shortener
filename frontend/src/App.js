import React, { useState } from 'react';
import shortenService from './services/shorten';
import './App.css';
import { Row, Col, Typography, Input, Button, Icon } from 'antd';

const { Title, Paragraph } = Typography;

const App = (props) => {
  const [input, setInput] = useState('');
  const [shortenUrl, setShortenUrl] = useState('test');

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
    const shortenLink = host.concat(shortenUrl)
    return (
      <Row type="flex" justify="center">
          <Title level={3} copyable>{shortenLink}</Title>
      </Row>
    )
  }

  return (
    <div className="container">
      <Row type="flex" justify="center">
        <Title>Url Shortener</Title>
      </Row> 
        <form onSubmit={handleSubmit} className="form-container">
          <Row type="flex" justify="center">
            <Col style={{ background: 'green', width: '300px' }} xs={4} sm={6} md={8} lg={10} xl={12}>
              <Input onChange={event => setInput(event.target.value)} placeholder="www.google.com" value={input}/>
            </Col>
            <Col style={{ background: 'blue' }} span={2}>
              <Button htmlType="submit">Shorten!</Button>
            </Col>
          </Row>
      </form>
      {shortenUrl ? displayShortenUrl() : <div></div>}
    </div>
  );
}

export default App;
