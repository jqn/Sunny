// Original example
// https://kentcdodds.com/blog/stop-using-isloading-booleans

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
