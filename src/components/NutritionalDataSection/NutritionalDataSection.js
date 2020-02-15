import React from 'react';

const NutritionalDataSection = props => {
    const { foodData, utils } = props;
    const nutrients = foodData.full_nutrients;
    nutrients.forEach(nutrient => {
        for (const util of utils) {
            if (nutrient.attr_id === util.attr_id) {
                nutrient.name = util.usda_nutr_desc
                nutrient.unit = util.unit
                break
            }
        }
    })

    return (
        <section className="nutritional-facts">
            <h2>{foodData.food_name}, {foodData.serving_qty} {foodData.serving_unit} ({foodData.serving_weight_grams} g)</h2>
            <table>
                <tbody>
                    {
                        nutrients.map(nutrient => {
                            return (<tr key={nutrient.attr_id}>
                                <td>{nutrient.name}</td>
                                <td>{nutrient.value} {nutrient.unit}</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        </section>
    )
};

export default NutritionalDataSection;
