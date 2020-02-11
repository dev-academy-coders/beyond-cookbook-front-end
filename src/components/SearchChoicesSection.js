import React from 'react';
import SearchChoiceButton from './SearchChoiceButton';

const SearchChoicesSection = props => {
    return (
        <section onClick={props.handleClick}>
            {
                props.choices.map((choice, i) => {
                    return <SearchChoiceButton name={choice.food_name} key={i}/>
                })
            }
        </section>
    )
}

export default SearchChoicesSection;
