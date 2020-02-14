import React from 'react';

const IngredientSearchInput = props => {
    return (
        <section className="search-input-section">
            <input type="text" onChange={props.handleChange}/>
        </section>
    )
}

export default IngredientSearchInput
