import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchUsersRequest } from './store/usersReduser';
import { fetchUserRequest } from './store/userReduser';

function App() {
  const { users, loading, error } = useSelector((state) => state.users);
  const { user, loadingUser, errorUser } = useSelector((state) => state.user);
  const [userId, setUserId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => { dispatch(fetchUsersRequest())
  },[dispatch])

  const handleClick = (userId) => {
    setUserId(userId);
    dispatch(fetchUserRequest(userId));
  }

  return (
    <div className="block">
      <h1 className="title">Пользователи</h1>
      {loading && <p>Загрузка...</p>}
      {error && <p>Ошибка {error}</p>}
      {users.length ? <ul>{
        users.map(person => (
          <details className='details' key={person.id} onClick={() => handleClick(person.id)}>
            <summary className='summary'>{person.name}</summary>
            {loadingUser && <p>Загрузка...</p>}
            {errorUser && <p>Ошибка {errorUser}</p>}
            {userId === person.id ?
              <div className='user'>
                <p>User: {user.username}</p>
                <p>e-mail: {user.email}</p>
              </div>
              : null
            }
          </details>
        ))
      }
      </ul> : null}
    </div>
  );
}

export default App;