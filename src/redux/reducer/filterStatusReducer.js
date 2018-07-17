const filterStatusReducer = (state = 'SHOW_ALL', action) => {
    if (action.type === 'SHOW_ALL') return 'SHOW_ALL';
    if (action.type === 'MEMORISED') return 'MEMORISED';
    if (action.type === 'NEED_PRACTISE') return 'NEED_PRACTISE';
    return state;
}

export default filterStatusReducer;