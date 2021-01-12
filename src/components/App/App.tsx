import { h } from 'preact';
import './App.css';

import Background from '../Background/Background';

function App() {

  return (
    <div className="App">
      <Background video="/time.mp4" />
    </div>
  );
}

export default App;
