import React from 'react';
import SearchChoiceButton from '../SearchChoiceButton/SearchChoiceButton';

const SearchChoicesSection = props => {
    return (
        <section className="choice-button-section" onClick={props.handleClick}>
            {
                props.choices.map((choice, i) => {
                    return <SearchChoiceButton name={choice.food_name} key={i}/>
                })
            }
        </section>
    )
}

export default SearchChoicesSection;
