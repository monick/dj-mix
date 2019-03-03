export const decrementAction = () => dispatch => {
    dispatch({
        type: 'DECREMENT'
    })
}

export const incrementAction = () => dispatch => {
    dispatch({
        type: 'INCREMENT'
    })
}