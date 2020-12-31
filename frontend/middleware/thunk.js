const thunk = next => action => {
    if (next === action) {
        action.dispatch();
    } else {
        next(action);
    }

}

export default thunk;