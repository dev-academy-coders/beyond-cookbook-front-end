import React, { useState, useEffect, useRef } from "react";
import "./NutritionSearchPage.css";
import axios from "axios";
import IngredientSearchInput from "../IngredientSearchInput/IngredientSearchInput";
import SearchChoicesSection from "../SearchChoicesSection/SearchChoicesSection";
import NutritionalDataSection from "../NutritionalDataSection/NutritionalDataSection";
import { Layout } from "antd";
import { fetchUtils } from '../../apis/Nutritionix';
const { Content } = Layout;

const NutritionSearchPage = props => {
  const [searchPhrase, setSearchPhrase] = useState();
  const [choices, setChoices] = useState();
  const [currentChoice, setCurrentChoice] = useState();
  const [utils, setUtils] = useState();
  const isInitialMount = useRef(true);

  const handleSearch = e => {
    setSearchPhrase(e.target.value);
  };

  useEffect(() => {
    if (isInitialMount.current) {
      fetchUtils.then(
        res => {
          setUtils(res.data)
        }
      )
      isInitialMount.current = false
    }
    else {
      axios({
        url: "https://trackapi.nutritionix.com/v2/search/instant",
        headers: {
          "x-app-id": process.env.REACT_APP_NUTRITION_DB_API_ID,
          "x-app-key": process.env.REACT_APP_NUTRITION_DB_API_KEY,
          "x-remote-user-id": 0
        },
        params: {
          query: searchPhrase,
          self: false,
          branded: false,
          detailed: true
        }
      }).then(res => {
        setChoices(res.data.common);
      });
    }
  }, [searchPhrase]);

  const handleChoice = e => {
    const foodName = e.target.value;
    if (foodName) {
      for (const choice of choices) {
        if (foodName === choice.food_name) {
          setCurrentChoice(choice);
        }
      }
    }
  };

  return (
    <Content>
      <section className="search-area">
        <IngredientSearchInput handleChange={handleSearch} />
        {choices && (
          <SearchChoicesSection choices={choices} handleClick={handleChoice} />
        )}
        {currentChoice && <NutritionalDataSection foodData={currentChoice} utils={utils} />}
      </section>
    </Content>
  );
};

export default NutritionSearchPage;
