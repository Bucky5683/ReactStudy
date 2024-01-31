import React from 'react';

// 컴포넌트 태그 사이에 넣은 값을 조회하고 싶을 땐, props.children 을 조회하면 됩니다.
// 내부의 내용이 보여지게 하기 위해서는 Wrapper 에서 props.children 을 렌더링해주어야 합니다.

/*
    쓰이는 곳(App.js)에서 값을 정한다 = props(부모)
    쓰임 당하는 곳(Hello.js나 Wrapper.js)에서 값을 정한다 = children
*/

function Wrapper({ children }) {
    const style = {
      border: '2px solid black',
      padding: '16px',
    };
    return (
      <div style={style}>
        {children}
      </div>
    )
  }

export default Wrapper;