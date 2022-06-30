import { FormattedMessage } from "react-intl";

import SendEmail from './SendEmail'

import MainPic from '../assets/main.svg';
import Search from '../assets/search.png';
import Promotion from '../assets/promotion.png';
import SocialMedia from '../assets/socialMedia.png';
import LandingPage from '../assets/landingPage.png';
import Web from '../assets/web.png';
import Mobile from '../assets/mobile.png';
import OnlineShopping from '../assets/online-shopping.png';
import Attraction from '../assets/attraction.png';

import './css/Content.css';

const Content = () => {
  return (
    <>
      <div className="aboutUs px-5 pt-3">
        <div className="row mb-5">
          <div className="col-sm-12 col-md-6 col-lg-6 mb-5 mt-5">
            <h1 className="mb-3 mt-5"> <FormattedMessage id="e_Marketing" /> </h1>
            <p> <FormattedMessage id="e_marketing_desc" /> </p>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 mb-5">
            <img src={MainPic} alt="" width="100%" height="100%" />
          </div>
        </div>
      </div>

      <div className="container">


        <h1 className="text-center mb-5"><FormattedMessage id="our_service" /></h1>
        <div className="row mb-5">

          <div className="col-sm-12 col-md-4 col-lg-4 mb-4">
            <div className="card">
              <div className="card-body">
                <img className="mb-3" src={Search} alt="" width="74px" height="74px" />
                <h5 className="card-title"><FormattedMessage id="search_engines" /></h5>
                <p> <FormattedMessage id="search_engines_desc" /> </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 mb-4">
            <div className="card">
              <div className="card-body">
                <img className="mb-3" src={Promotion} alt="" width="74px" height="74px" />
                <h5 className="card-title"><FormattedMessage id="google_campaigns" /></h5>
                <p> <FormattedMessage id="google_campaigns_desc" /> </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 mb-4">
            <div className="card">
              <div className="card-body">
                <img className="mb-3" src={SocialMedia} alt="" width="74px" height="74px" />
                <h5 className="card-title"><FormattedMessage id="social_media_marketing" /></h5>
                <p> <FormattedMessage id="social_media_marketing_desc" /> </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 mb-4">
          <div className="card">
            <div className="card-body">
              <img className="mb-3" src={LandingPage} alt="" width="74px" height="74px" />
              <h5 className="card-title"><FormattedMessage id="landing_page" /></h5>
              <p> <FormattedMessage id="landing_page_desc" /> </p>
            </div>
          </div>
        </div>
          <div className="col-sm-12 col-md-4 col-lg-4 mb-4">
            <div className="card">
              <div className="card-body">
                <img className="mb-3" src={Web} alt="" width="74px" height="74px" />
                <h5 className="card-title"><FormattedMessage id="develop_website" /></h5>
                <p> <FormattedMessage id="develop_website_desc" /> </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 mb-4">
            <div className="card">
              <div className="card-body">
                <img className="mb-3" src={Mobile} alt="" width="74px" height="74px" />
                <h5 className="card-title"><FormattedMessage id="mobile_apps" /></h5>
                <p> <FormattedMessage id="mobile_apps_desc" /> </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 mb-4">
            <div className="card">
              <div className="card-body">
                <img className="mb-3" src={OnlineShopping} alt="" width="74px" height="74px" />
                <h5 className="card-title"><FormattedMessage id="e_commerce" /></h5>
                <p> <FormattedMessage id="e_commerce_desc" /> </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 mb-4">
            <div className="card">
              <div className="card-body">
                <img className="mb-3" src={Attraction} alt="" width="74px" height="74px" />
                <h5 className="card-title"><FormattedMessage id="attract" /></h5>
                <p> <FormattedMessage id="attract_desc" /> </p>
              </div>
            </div>
          </div>

        </div>
      </div>
      <SendEmail />
    </>
  );
};

export default Content;