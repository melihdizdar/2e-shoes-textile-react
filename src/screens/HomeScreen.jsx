import React from "react";
import { withTranslation } from "react-i18next";

const HomeScreen = ({ t }) => {
    return (
        <div>
            {t("test")}
        </div>
    );
};

export default withTranslation()(HomeScreen);