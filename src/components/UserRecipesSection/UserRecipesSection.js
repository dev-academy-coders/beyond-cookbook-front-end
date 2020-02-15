import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import IngredientSearchInput from '../IngredientSearchInput/IngredientSearchInput'
import RecipeLink from '../RecipeLink/RecipeLink';

export default () => {
    const [searchPhrase, setSearchPhrase] = useState();
    const [recipes, setRecipes] = useState();
    const isInitialMount = useRef(true);

    const handleSearch = e => {
      setSearchPhrase(e.target.value);
    };

    useEffect(() => {
        axios({
            url: "http://127.0.0.1:8000/recipes/",
            params: {
                search: searchPhrase
            }
        })
        .then(res => {
            setRecipes(res.data);
            });
    }, [searchPhrase])

    return (
        <section className="search-area">
            <IngredientSearchInput handleChange={handleSearch}/>
            {recipes && recipes.map(recipe => (
                <RecipeLink />
            ))}
        </section>
    )
}
