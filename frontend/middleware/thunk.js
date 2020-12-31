const thunk = store => next => action => {
    if (typeof action === 'function') {
        action(dispatch);
    } else {
        next(action);
    }
}

export default thunk;