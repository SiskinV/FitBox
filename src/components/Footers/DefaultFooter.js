/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <div className="copyright" id="copyright">
            © Copyright 2020,  {" "}
            <a
              href="https://github.com/SiskinV/FitGym"
              target="_blank"
            >
              Vladimir Siskin i Nikola Momcilovic
            </a>
            , Odsek za softversko inzenjerstvo Elektrotehnickog fakultetа
            Univerziteta u Beogradu
          </div>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
