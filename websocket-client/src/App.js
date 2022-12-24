import React, { useEffect, useState } from 'react';

function App() {
  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Connect to the WebSocket server
    const ws = new WebSocket('ws://0.0.0.0:5000');

    // Add event listeners
    ws.onopen = () => {
      console.log('Connected to WebSocket server');
    };
    ws.onmessage = (event) => {
      console.log('Received message:', event.data);
      setMessage(event.data);
    };
    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
    ws.onclose = () => {
      console.log('Disconnected from WebSocket server');
    };

    setSocket(ws);

    // Clean up the WebSocket connection when the component unmounts
    return () => {
      ws.close();
    };
  }, []);

  return (
    <div>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;

