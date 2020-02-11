import RecipeAPI from '../apis/RecipeAPI'

const UserLogged = user => (
    {
        type: 'USER_LOGGED_SUCCESS',
        payload: user
    }
);

export const fetchUser = () => async dispatch => {
    const response = await RecipeAPI.post()
    localStorage.setItem("token", response.jwt)
    dispatch(UserLogged(/**/))
}
