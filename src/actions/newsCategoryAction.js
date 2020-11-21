export const changeNewsCategory = (category) =>
{
    return {
        type: 'CHANGE_CATEGORY',
        payload: category
    }
};