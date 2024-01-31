import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// ReactDOM.render 의 역할은 브라우저에 있는 실제 DOM 내부에 리액트 컴포넌트를 렌더링하겠다는 것을 의미
// id 가 root 인 DOM 을 선택하고 있는데, 이 DOM 이 어디있는지 볼까요?
/*
  public/index.html
  <div id="root"></div>
*/
// 결국, 리액트 컴포넌트가 렌더링 될 때에는, 렌더링된 결과물이 위 div 내부에 렌더링되는 것 입니다.

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
