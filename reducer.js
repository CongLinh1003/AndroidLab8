
//reducer:
export function reducer(state, action) {
    switch (action.type) {
        case 'add': return {
            ...state, value: state.count + 1
        }
        case 'add': return {
            ...state, value: state.count - 1
        }
        default:
            return state;
    }
}