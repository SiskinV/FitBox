import React from 'react';
//import "../styles/components/Login.css";
//import 'whatwg-fetch';
import Cookies from 'js-cookie';

let pwShown = 0;


class Login extends React.Component {

  constructor(props) {
    super(props);
  }





  //nece???
  oko() {
    if (pwShown == 0) {
      pwShown = 1;
      {
        this.show();
      }
    } else {
      pwShown = 0;
      this.hide();
    }
  }


  submitHandler = (e) => {
    //this.checkFields();
    e.preventDefault(); //to avoid page refresh??

    let dataToSend = {
      username: this.props.values.username,
      password: this.props.values.password,
    };  
    localStorage.setItem('dataToSend', dataToSend);


  };




render() {

    var { values, handleChange } = this.props;
    return (
      
      <div className="overlay">
        <form className="login_form"onSubmit={this.submitHandler}>
          <div className="con">
            <header className="head-form">
              <h2 className="fontwhite">Log In</h2>
              <p className="fontgray">
                login here using your username and password
              </p>
            </header>
            <p className="fontred" id="errField"></p>

            <div className="field-set" align="center">
              <span className="input-itemm">
                <i className="fa fa-user-circle"></i>
              </span>
              <input
                name="username"
                value={values.username}
                onChange={handleChange('username')}
                type="text"
                autoComplete="new-password"
                className="form-input"
                placeholder="UserName"
                required
              />
              <br></br>
              <br />
              <span className="input-itemm eye">
                <i className="fa fa-key"></i>
              </span>
              <input
                name="password"
                id="password"
                value={values.password}
                onChange={handleChange('password')}
                type="password"
                autoComplete="new-password"
                className="form-input"
                placeholder="Password"
                required
              />

              <span className="eyee">
                <i
                  className="fa fa-eye fa-fw "
                  aria-hidden="true"
                  onClick={this.show}
                ></i>
              </span>
              <br />

              <button
                className="btn buttonLog"
                type="submit"
                value={this.loading ? "Loading..." : "Login"}
                disabled={this.loading}
              >
                Log In
              </button>
            </div>

            <div className="other">
              <button className="btn submits frgt-pass buttonLog" id="special">
                Forgot Password
              </button>
              <button className="btn submits sign-up buttonLog" onClick={this.register}>
                Sign up
                {}
                <i className="fa fa-user-plus" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    );

  }
}

export default Login;