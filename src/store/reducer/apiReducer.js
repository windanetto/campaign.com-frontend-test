const intiate = {
  data: []
}

export const apiReducer = (state = intiate, action) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, data: action.payload }
    default:
      break;
  }

  return state;
}

export default apiReducer