export const initialState = {
  trigger: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "MOUSE_EVENT":
      return {
        ...state,
        trigger: action.trigger,
      };
    default:
      return state;
  }
};
