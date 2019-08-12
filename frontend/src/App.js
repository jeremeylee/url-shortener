import React, { useState } from 'react';
import shortenService from './services/shorten';
import './App.css';
import { Row, Col, Typography, Input, Button, Icon } from 'antd';

const { Title, Paragraph } = Typography;

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
    const shortenLink = host.concat(shortenUrl)
    return (
      <Row type="flex" justify="center" className="shorten-url-container">
          <Title level={3} copyable >{shortenLink}</Title>
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
            <Title level={2}>Paste a URL to shorten it: </Title>
          </Row>
          <Row type="flex" justify="center">
            <Col xs={4} sm={6} md={8} lg={10} xl={12}>
              <Input onChange={event => setInput(event.target.value)} placeholder="http://www.google.com" value={input} className="input-form"/>
            </Col>
            <Col span={2}>
              <Button htmlType="submit" type="primary" size="large">Shorten!</Button>
            </Col>
          </Row>
      </form>
      {shortenUrl ? displayShortenUrl() : <div></div>}
    </div>
  );
}

export default App;
