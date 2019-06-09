const api = 'http://localhost:3005/api'

// type
const TYPE = {
  GET_USERS: 'GET_USERS',
  ADD_USER: 'ADD_USER',
  UPDATE_USER: 'UPDATE_USER',
  DELETE_USER: 'DELETE_USER',
  CHECK_USER: 'CHECK_USER'
}

const initState = {
}

// action
export const getUsers = () => {
  return dispatch => {
    fetch(`${api}/users`)
      .then(res => {
        res.json()
          .then(users => {
            // 
            dispatch({
              type: TYPE.GET_USERS,
              payload: { users }
            })
          })
      })
  }
}

export const addUser = (user) => {
  return dispatch => {
    fetch(`${api}/users`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user), // body data type must match "Content-Type" header
    })
      .then(res => {
        dispatch({
          type: TYPE.ADD_USER,
          payload: { user }
        })
      });
  }
}
export const updateUser = (user) => {
  return dispatch => {
    fetch(`${api}/users/${user._id}`, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user), // body data type must match "Content-Type" header
    })
      .then(res => {
        dispatch({
          type: TYPE.UPDATE_USER,
          payload: { user }
        })
      });
  }
}

export const deleteUser = (id) => {
  return dispatch => {
    fetch(`${api}/users/${id}`, {
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
      },
    })
    dispatch({
      type: TYPE.DELETE_USER,
      payload: { id }
    })
  }
}

export const checkAuth = (username, password, history, setOpen) => {
  return dispatch => {
    const _user = { username, password }
    fetch(`${api}/users/checkAuth`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(_user)
    }).then(res => {
      res.json().then(_res => {
        const { user, result } = _res
        if (result) {
          // yes - chuyen trang user detail
          setOpen(false)
          history.push("/user-details"); //chuyen trang
        } else {
          // no - thong bao username/password k dung
          alert("Sai username password");
        }

        dispatch({
          type: TYPE.CHECK_USER,
          payload: { user }
        })
      })
    })
  }
}

// reducer
export default (state = initState, action) => {
  const { payload } = action
  switch (action.type) {
    case TYPE.GET_USERS: {
      console.log(payload.users)
      const users = payload.users
      return { ...state, users }
    }
    case TYPE.ADD_USER: {
      const user = payload.user
      const users = [...state.users, user]
      return { ...state, users }
    }
    case TYPE.UPDATE_USER: {
      const user = payload.user
      const users = state.users.map(_user => {
        if (_user._id === user._id) {
          _user = { ...user }
        }
        return _user;
      })
      return { ...state, users }
    }
    case TYPE.DELETE_USER: {
      const id = payload.id
      const users = state.users.filter(_user => {
        return _user._id !== id // true, false
      })
      return { ...state, users }
    }
    case TYPE.CHECK_USER: {
      const user = payload.user
      return { ...state, user }
    }
    default:
      return state;
  }
}



/**
 fetch(`${api}/users`)
  .then(async function(res) {
      const users = await res.json()
      console.log(users)
  })
 */