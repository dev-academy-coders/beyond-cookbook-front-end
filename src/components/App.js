import React, { useState } from 'react';
import IngredientSearchInput from './IngredientSearchInput';

const App = () => {
    const [searchPhrase, setSearchPhrase] = useState();

    const handleSearch = e => {
        setSearchPhrase(e.target.value);
    }

    return (
        <IngredientSearchInput handleChange={handleSearch}/>
    )
}

export default App