import React from "react";
import { withTranslation } from "react-i18next";

const HomeScreen = ({ t }) => {
    return (
        <div>
            {t("Home")}
        </div>
    );
};

export default withTranslation()(HomeScreen);