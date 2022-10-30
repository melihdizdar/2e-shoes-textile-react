import React from "react";
import { withTranslation } from "react-i18next";
import PromoSlider from "../components/Home/PromoSlider";

const HomeScreen = ({ t }) => {
    return (
        <>
            <PromoSlider/>
        </>
    );
};

export default withTranslation()(HomeScreen);