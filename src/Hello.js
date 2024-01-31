import React from 'react';  //react 불러오기

/*
    리액트 컴포넌트는 함수형태로 작성 할 수도 있고 클래스형태로도 작성 할 수 있습니다. 지금 단계에서는 함수로 작성하는 방법에 대해서만 알아보겠습니다.
    리액트 컴포넌트에서는 XML 형식의 값을 반환해줄 수 있는데 이를 JSX 라고 부릅니다. 이에 대해선 다음번에 알아보도록 하겠습니다.
*/

function Hello({ color, name }) {
    return <div style={{ color }}>안녕하세요 {name}</div>
}

export default Hello;

/*
    이 코드는 Hello 라는 컴포넌트를 내보내겠다는 의미입니다. 이렇게 해주면 다른 컴포넌트에서 불러와서 사용 할 수 있습니다. 
    이 컴포넌트를 한번 App.js 에서 불러와서 사용해보겠습니다. (CodeSandbox 의 경우 index.js 에서 불러오세요. 그리고 App 컴포넌트 코드 아래부분은 건드리지마세요.)
*/