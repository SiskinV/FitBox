import React from "react";
import { useState } from 'react';
// reactstrap components
import { Container } from "reactstrap";

// core components
let matrix = [['moma.roma', 'Nikola', 'Momcilovic', '21', 'Trener', 'Ocena', '4.5'], ['volodja', 'Vladimir', 'Siskin', '19', 'Klijent', 'Aktivan', '4 meseca'], ['makivestica', 'Marina', 'Momcilovic', '35', 'Trener', 'Ocena', '4.8'], ['dragan.car', 'Dragan', 'Momcilovic', '61', 'Klijent', 'Aktivan', '3 godine']];
function ProfilePageHeader1() {
  //let logovanje = {
  //  username: 'ime',
  //  password: 'prezime'
  //};
  //let ime = matrix[0][1] + ' ' + matrix[0][2];;
  let god = matrix[0][3];
  let rang = matrix[0][4];
  let aktivnost = matrix[0][5];
  let avg = matrix[0][6];
  let lg = (localStorage.getItem('username'));
  //if (lg != null) {
  //console.log(lg + '1');
  //for (var i = 0; i < matrix.length; i++) { if (matrix[i][0] == lg) { ime = matrix[i][1] + ' ' + matrix[i][2]; god = matrix[i][3]; rang = matrix[i][4]; avg = matrix[i][5]; aktivnost = matrix[i][6]; } }
  //}
  //console.log(god);


  //console.log(logovanje.password);
  let pageHeader = React.createRef();

  var a;

  const getUser = () => {
    var log = JSON.parse(localStorage.getItem('ulogovan'));
    var userName = log.username;
    var users = JSON.parse(localStorage.getItem('users'));
    console.log(log);
    console.log(userName);
    for (var i = 0; i < users.length; i++) {
      if (users[i].username == userName) {
        log = users[i];
      }
    }
    console.log(log);
    setState({
      name: log.name,
      surname: log.surname,
      trainings: log.trainings
    });
  }

  const [state, setState] = useState({
    name: "",
    surname: "",
    trainings: [{
      name: "",
      done: "",
      comments: {
        number: String,
        desc: String,
      }
    }]
  })

  React.useEffect(() => {

    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });


  return (
    <>
      <div
        className="page-header clear-filter page-header-small"
        filter-color="blue"
      >
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg5.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>

          <div className="photo-container" onLoad={getUser}>
            <img alt="..." src={"https://getstream.io/random_svg/?id=m-3&name=" + state.name}></img>
          </div>
          <h3 className="title"> {state.name + " " + state.surname} </h3>
          <p className="category">{rang}</p>
          <div className="content">
            <div className="social-description">
              <h2>{god}</h2>
              <p>Years</p>
            </div>
            <div className="social-description">
              <h2>{avg}</h2>
              <p>{aktivnost}</p>
            </div>
            <div className="social-description">
              <h2>100e</h2>
              <p>Price</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default ProfilePageHeader1;
