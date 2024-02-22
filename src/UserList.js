import React from 'react';

/* 
    재사용되는 코드를 일일히 넣는게 별로 좋지 않으니, 컴포넌트를 재사용 할 수 있도록 새로 만들어주겠습니다.
    참고로, 한 파일에 여러개의 컴포넌트를 선언해도 괜찮습니다.
*/

function User({ user }) {
    return (
      <div>
        <b>{user.username}</b> <span>({user.email})</span>
      </div>
    );
  }
  
  function UserList() {
    const users = [
      {
        id: 1,
        username: 'velopert',
        email: 'public.velopert@gmail.com'
      },
      {
        id: 2,
        username: 'tester',
        email: 'tester@example.com'
      },
      {
        id: 3,
        username: 'liz',
        email: 'liz@example.com'
      }
    ];
  
    return (
        <div>
          {users.map(user => (
            <User user={user} key={user.id} />
          ))}
        </div>
    );
  }
  
  export default UserList;