import logo from './logo.svg';
import './App.css';

import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';

function App() {
  return (
    <div>
      <Wrapper>
        <Hello name="react" color="red"/>
        <Hello color="pink"/>
      </Wrapper>
      <Counter />
    </div>
  );
}

export default App;
