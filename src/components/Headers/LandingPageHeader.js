import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();
  const [lan, setLan] = React.useState(localStorage.getItem("lan"));

  function lang() {
    setLan(localStorage.getItem("lan"));
    console.log(lan);
  }

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
      <div className="page-header page-header-small" onLoad={lang}>
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/landingPageTeretana4.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Container>
            <h1 className="title">
              Welcome to FitBox.
            </h1>
            <div>
              <blockquote className="blockqoute">
                <p> Working hours : </p>
                <p> Mon-Fri: 00-24h </p>
                <p> Sat-Sun: 8-21h</p>
              </blockquote>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPageHeader;
