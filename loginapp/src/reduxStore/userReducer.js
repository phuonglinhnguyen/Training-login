const api = 'http://localhost:3005/api'

// type
const TYPE = {
  GET_USERS: 'GET_USERS',
  ADD_USER: 'ADD_USER',
  UPDATE_USER: 'UPDATE_USER',
  DELETE_USER: 'DELETE_USER',
  CHECK_USER: 'CHECK_USER',
  LOADING_USER: 'LOADING_USER',
  LOG_OUT: 'LOG_OUT'
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
      .then(async res => {
        const result = await res.json();
        dispatch({
          type: TYPE.ADD_USER,
          payload: { user: result.user }
        })
      });
  }
}

export const updateUser = (user, id) => {
  return dispatch => {
    console.log(user);
    console.log(id);

    fetch(`${api}/users/${id}`, {
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
          if (user.role === "USER") {
            history.push("/user-details"); //chuyen trang
          } else if (user.role === "ADMIN") {
            history.push("/manage-users");
          }

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

export const startLoading = () => {
  return dispatch => {
    dispatch({
      type: TYPE.LOADING_USER
    })
  }
}

export const logOut = () => {
  return dispatch => {
    console.log('logOut');
    dispatch({
      type: TYPE.LOG_OUT
    })
  }
}

// reducer
export default (state = initState, action) => {
  const { payload } = action
  switch (action.type) {
    case TYPE.GET_USERS: {
      const users = payload.users
      return { ...state, users, loading: false }
    }
    case TYPE.ADD_USER: {
      const user = payload.user
      const users = [...state.users, user]
      console.log(state);
      return { ...state, users, loading: false }
    }
    case TYPE.UPDATE_USER: {
      const user = payload.user
      const users = state.users.map(_user => {
        if (_user._id === user._id) {
          _user = { ...user }
        }
        return _user;
      })
      return { ...state, users, loading: false }
    }
    case TYPE.DELETE_USER: {
      const id = payload.id
      const users = state.users.filter(_user => {
        return _user._id !== id // true, false
      })
      return { ...state, users, loading: false }
    }
    case TYPE.CHECK_USER: {
      const user = payload.user
      return { ...state, user, loading: false }
    }
    case TYPE.LOADING_USER: {
      return { ...state, loading: true }
    }
    case TYPE.LOG_OUT: {

      return { ...state, user: null }
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