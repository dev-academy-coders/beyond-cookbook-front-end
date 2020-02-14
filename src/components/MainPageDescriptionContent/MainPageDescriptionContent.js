import React from 'react';
import { Layout } from "antd";
const { Content } = Layout;

const MainPageDescriptionContent = () => {
    return(
        <Content
            className="contents"
            style={{
                margin: "16px 36px",
                padding: 24,
                background: "transparent",
                width: "45vw",
                fontFamily: "Gabriola",
                fontSize: "25px"
            }}
        >
            This is a cookbook that will take your cooking far beyond. If you
            ever find yourself more than just hungry, this tool will let empower
            your food preparation experience. Interested? <br></br>
            <p></p>
            Beyond Cookbook is a tool that will let save your recipes in one
            place and make them at your disposal on any browser-supporting
            device. It is easy to add new recipes, browse, organise, edit and
            delete existing ones with Beyond Cookbook. But most importantly you
            will be able to evaluate the nutrient value and see to what extent
            your meals satisfy the recommended daily intake of proteins,
            vitamins, and minerals.
            <br></br>
            <p></p>
            You can give it a try and search for nutritional data of any,
            potential or actual, ingredient of your meal by clicking{" "}
            <a href="/">here</a>.<br></br>
            <p></p>
            If you wish to start your own cookbook and find out how nutritious
            your recipes are, please find yourself more than welcome to{" "}
            <a href="/">sign in</a>.
      </Content>
    )
}

export default MainPageDescriptionContent