import logo from './logo.svg';
import './App.css';

import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';

function App() {
  return (
    <div>
      <Wrapper>
        <Hello name="react" color="red"/>
        <Hello color="pink"/>
      </Wrapper>
      <Counter />
      <InputSample />
      <UserList />
    </div>
  );
}

export default App;
