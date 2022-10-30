/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { withTranslation } from "react-i18next";
import homePromoSliderData from "../../data/homePromoSliderData";

const PromoSlider = ({ t }) => {
    return (
        <div data-uk-slideshow="animation: pull">
            <div class="uk-position-relative uk-visible-toggle" tabIndex="-1">
                <ul class="uk-slideshow-items" data-uk-height-viewport="offset-top:true;">
                    {homePromoSliderData.map((sliderItems) => (
                        <li key={sliderItems._id}>
                            <img src={sliderItems.urlDesktop} alt={`${sliderItems.alt}Desktop`} className="uk-width-1-1 uk-visible@m" data-uk-cover />
                            <img src={sliderItems.urlDesktop} alt={`${sliderItems.alt}Mobile`} className="uk-width-1-1 uk-hidden@m" data-uk-cover />
                        </li>
                    ))}
                </ul>
                <a class="uk-position-center-left uk-position-small uk-text-white uk-hidden-hover" href="#" data-uk-slidenav-previous data-uk-slideshow-item="previous"></a>
                <a class="uk-position-center-right uk-position-small uk-text-white uk-hidden-hover" href="#" data-uk-slidenav-next data-uk-slideshow-item="next"></a>
            </div>
            <ul class="uk-slideshow-nav uk-dotnav line-dotnav uk-position-bottom-center uk-margin"></ul>
        </div>
    );
};

export default withTranslation()(PromoSlider);