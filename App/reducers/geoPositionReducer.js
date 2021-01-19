// Original example
// https://kentcdodds.com/blog/stop-using-isloading-booleans
// https://codesandbox.io/s/dark-lake-r07lr?file=/src/index.js:1256-1261
const geoPositionReducer = (state, action) => {
  switch (action.type) {
    case 'error': {
      return {
        ...state,
        status: 'rejected',
        error: action.error,
      };
    }
    case 'success': {
      return {
        ...state,
        status: 'resolved',
        position: action.position,
      };
    }
    case 'start': {
      return {
        ...state,
        status: 'pending',
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export default geoPositionReducer;
