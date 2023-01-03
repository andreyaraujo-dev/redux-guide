const initialState = {
  currentUser: null,
};

export const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "user/login":
      return { ...state, currentUser: payload };
    case "user/logout":
      return { ...state, currentUser: null };
    default:
      return state;
  }
};
