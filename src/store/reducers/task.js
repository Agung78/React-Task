const initialState = {
  tasks: []
}

export default function taskReducer(state = initialState, action) {
  switch (action.type) {
    case 'getTask':
      return { ...state, tasks: action.payload }
    default:
      return state
  }
}