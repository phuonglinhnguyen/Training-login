// type
const TYPE = {
  LOADING: 'LOADING',
}

const initState = {
  loading: false
}

// action
export const startLoading = () => {
  return dispatch => {
    dispatch({
      type: TYPE.LOADING
    })
  }
}

// reducer
export default (state = initState, action) => {
  //   const { payload } = action
  switch (action.type) {
    case TYPE.LOADING: {
      return { ...state, loading: true }
    }
    default:
      return state;
  }
}
