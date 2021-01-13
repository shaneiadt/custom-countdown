import { h } from 'preact';
import './App.css';

import Background from '../Background/Background';
import Container from '../Container/Container';

function App() {

  return (
    <div className="App">
      <Background video="/time.mp4" />
      <Container />
    </div>
  );
}

export default App;
