import axios from 'axios';

export const fetchUtils = axios({
    url: "https://trackapi.nutritionix.com/v2/utils/nutrients",
    headers: {
      "x-app-id": process.env.REACT_APP_NUTRITION_DB_API_ID,
      "x-app-key": process.env.REACT_APP_NUTRITION_DB_API_KEY,
    }
  })