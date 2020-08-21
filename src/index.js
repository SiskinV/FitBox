/*

=========================================================
* Now UI Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2019 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/master/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/nucleo-icons-page-styles.css";
// pages for this kit
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LoginPage from "views/pages/LoginPage.js";
import LoginPageSr from "views/pages/SRB/LoginPageSr.js"
import LandingPage from "views/pages/LandingPage.js";
import LandingPageSr from "views/pages/SRB/LandingPageSr.js"
import ProfilePage1 from "views/pages/ProfilePage1.js";
import ProfilePage1Sr from 'views/pages/SRB/ProfilePage1Sr.js'
import ProfilePage2 from 'views/pages/ProfilePage2.js';
import ProfilePage3 from 'views/pages/ProfilePage3.js';
import TrainingPage from "views/pages/TrainingPage";
import TrainingPageSr from "views/pages/SRB/TrainingPageSr.js";
import ZakazivanjeTreningaSr from "views/pages/SRB/ZakazivanjeTreningaSr.js"
import ZakazivanjeTreninga from "views/pages/ZakazivanjeTreninga.js"
import NutrtionistPageSr from "views/pages/SRB/NutritionistPageSr.js";
import NutrtionistPage from "views/pages/NutritionistPage ";
import MassagePageSr from 'views/pages/SRB/MassagePageSr';
import MassagePage from 'views/pages/MassagePage';
import MasNutriReservePageSr from 'views/pages/SRB/MasNutriReservePageSr.js';
import MasNutriReservePage from 'views/pages/MasNutriReservePage';
import SignupPageSr from "views/pages/SRB/SignUpPageSr";
import SignupPage from "views/pages/SignUpPage";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route
          path="/landing-pageSr"
          render={props => <LandingPageSr {...props} />}
        />
        <Route
          path="/landing-page"
          render={props => <LandingPage {...props} />}
        />
        <Route
          path="/profile-page1Sr"
          render={props => <ProfilePage1Sr {...props} />}
        />
        <Route
          path="/profile-page1"
          render={props => <ProfilePage1 {...props} />}
        />
        <Route
          path="/profile-page2"
          render={props => <ProfilePage2 {...props} />}
        />
        <Route
          path="/profile-page3"
          render={props => <ProfilePage3 {...props} />}
        />
        <Route path="/login-pageSr" render={props => <LoginPageSr {...props} />} />
        <Route path="/login-page" render={props => <LoginPage {...props} />} />
        <Route path="/index" render={props => <Index {...props} />} />
        <Route
          path="/nucleo-icons"
          render={props => <NucleoIcons {...props} />}
        />
        <Route
          path="/training-pageSr"
          render={props => <TrainingPageSr{...props} />}
        />
        <Route
          path="/training-page"
          render={props => <TrainingPage{...props} />}
        />
        <Route
          path="/massage-pageSr"
          render={props => <MassagePageSr{...props} />}
        />
        <Route
          path="/massage-page"
          render={props => <MassagePage{...props} />}
        />
        <Route
          path="/masnutrireserve-pageSr"
          render={props => <MasNutriReservePageSr{...props} />}
        />
        <Route
          path="/masnutrireserve-page"
          render={props => <MasNutriReservePage{...props} />}
        />
        <Route
          path="/nutritionist-pageSr"
          render={props => <NutrtionistPageSr{...props} />}
        />
        <Route
          path="/nutritionist-page"
          render={props => <NutrtionistPage{...props} />}
        />
        <Route
          path="/signup-page"
          render={props => <SignupPage{...props} />}
        />
        <Route
          path="/signup-pageSr"
          render={props => <SignupPageSr{...props} />}
        />
        <Route
          path="/zakazi-pageSr"
          render={props => <ZakazivanjeTreningaSr{...props} />}
        />
        <Route
          path="/zakazi-page"
          render={props => <ZakazivanjeTreninga{...props} />}
        />
        <Redirect to="/landing-page" />
        <Redirect from="/" to="/ladning-page" />
      </Switch>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
