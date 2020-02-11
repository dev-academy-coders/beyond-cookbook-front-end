import RecipeAPI from '../apis/RecipeAPI'

const UserLoggedIn = user => (
    {
        type: 'USER_LOGGING_IN_SUCCESSFUL',
        payload: user
    }
);

export const fetchUser = () => async dispatch => {
    const response = await RecipeAPI.post()
    localStorage.setItem("token", response.jwt)
    dispatch(UserLoggedIn(/**/))
}
