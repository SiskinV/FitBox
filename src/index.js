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
import LandingPage from "views/pages/LandingPage.js";
import ProfilePage1 from "views/pages/ProfilePage1.js";
import ProfilePage2 from 'views/pages/ProfilePage2.js';
import ProfilePage3 from 'views/pages/ProfilePage3.js';
import TrainingPage from "views/pages/TrainingPage";
import NutrtionistPage from "views/pages/NutritionistPage ";
import MassagePage from 'views/pages/MassagePage';
import SignupPage from "views/pages/SignUpPage";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route
          path="/landing-page"
          render={props => <LandingPage {...props} />}
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
        <Route path="/login-page" render={props => <LoginPage {...props} />} />
        <Route path="/index" render={props => <Index {...props} />} />
        <Route
          path="/nucleo-icons"
          render={props => <NucleoIcons {...props} />}
        />
        <Route
          path="/training-page"
          render={props => <TrainingPage{...props} />}
        />
        <Route
          path="/massage-page"
          render={props => <MassagePage{...props} />}
        />
        <Route
          path="/nutritionist-page"
          render={props => <NutrtionistPage{...props} />}
        />
        <Route
          path="/signup-page"
          render={props => <SignupPage{...props} />}
        />
        <Redirect to="/landing-page" />
        <Redirect from="/" to="/ladning-page" />
      </Switch>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
