import RecipeAPI from '../apis/RecipeAPI';
import { fetchUtils } from '../apis/Nutritionix';

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

export const nutritionUtilsLoaded = utils => (
    {
        type: "NUTRTION_UTILS_LOADED",
        payload: utils
    }
)

export const loadNutritonUtils = () => async dispatch => {
    const res = await fetchUtils
    dispatch(nutritionUtilsLoaded(res))
}
