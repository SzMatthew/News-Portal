const categoryReducer = (state = 'shared', action) =>
{
    switch (action.type)
    {
        case 'CHANGE_CATEGORY':
            return action.payload;
        default:
            return state;
     }
}

export default categoryReducer;