import React, { useState } from 'react';
import './App.css';
import { Row, Typography, Input, Button } from 'antd';

const { Title } = Typography;

const App = (props) => {
  const [input, setInput] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.value);
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
    </div>
  );
}

export default App;
