import React from 'react';

const NutritionalDataSection = props => {
    const { foodData } = props;
    const nutrients = foodData.full_nutrients;

    return (
        <section>
            <h2>{foodData.food_name}</h2>
            <table>
                <tbody>
                    {
                        nutrients.map(nutrient => {
                            return (<tr key={nutrient.attr_id}>
                                <td>{nutrient.attr_id}</td>
                                <td>{nutrient.value}</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        </section>
    )
};

export default NutritionalDataSection;
