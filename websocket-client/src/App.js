import React, { useEffect, useState, useRef } from 'react';

function App() {
  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);
  const ws = useRef(new WebSocket('wss://sinopino391-probable-guide-qrp9pr6qwvw2xvgg-5272.preview.app.github.dev/ws'));

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    ws.current.send(inputValue);
  };

  useEffect(() => {
    // Connect to the WebSocket server


    // Add event listeners
    ws.current.onopen = () => {
      console.log('Connected to WebSocket server');
    };
    ws.current.onmessage = (event) => {
      console.log('Received message:', event.data);
      setMessage(event.data);
      setItems([...items, event.data]);
      console.log(items.push(event.data));
      console.log(items);
    };
    ws.current.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
    ws.current.onclose = () => {
      console.log('Disconnected from WebSocket server');
    };

    setSocket(ws.current);

    // Clean up the WebSocket connection when the component unmounts
    return () => {
      if (ws.current.readyState === 1) {
        ws.current.close();
      };
    }
  }, []);

  return (
    <div>
      {message && <p>{message}</p>}
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleClick}>Click me</button>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

