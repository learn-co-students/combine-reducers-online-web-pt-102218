export default function authorsReducer(state = [], action) {
  switch (action.type) {
    case "ADD_AUTHOR":
      return [...state, action.author]

    case "REMOVE_AUTHOR":
      let idx = state.indexOf(action.id);
      return [
        state.slice(0, idx),
        state.slice(idx + 1),
      ]

    default:
      return state;
    }
};
