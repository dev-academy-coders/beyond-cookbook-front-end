import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import IngredientSearchInput from "../IngredientSearchInput/IngredientSearchInput";
import SearchChoicesSection from "../SearchChoicesSection/SearchChoicesSection";
import NutritionalDataSection from "../NutritionalDataSection/NutritionalDataSection";
import { Layout } from "antd";
const { Content } = Layout;

const NutritionSearchPage = () => {
  const [searchPhrase, setSearchPhrase] = useState();
  const [choices, setChoices] = useState();
  const [currentChoice, setCurrentChoice] = useState();
  const isInitialMount = useRef(true);

  const handleSearch = e => {
    setSearchPhrase(e.target.value);
  };

  useEffect(() => {
    isInitialMount.current
      ? (isInitialMount.current = false)
      : axios({
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
      <IngredientSearchInput handleChange={handleSearch} />
      {choices && (
        <SearchChoicesSection choices={choices} handleClick={handleChoice} />
      )}
      {currentChoice && <NutritionalDataSection foodData={currentChoice} />}
    </Content>
  );
};

export default NutritionSearchPage;
