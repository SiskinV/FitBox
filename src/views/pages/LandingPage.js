import React from "react";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import IndexNavbar from "components/Navbars/IndexNavbar";

function LandingPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <LandingPageHeader />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Ko smo mi?</h2>
                <h5 className="description">
                  Mi smo nova najmodernija teretana u gradu.Nalazimo se na lekinom brdu.
                  Novi programi po ugledu na najbolje teretane sveta zajedno sa nutricionistima
                  i prostorom za masaze predstvaljaju savrsen spoj za sve sportiste.
                </h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/landingPageZuta2.jpg") + ")"
                    }}
                  >
                    <p className="blockquote blockquote-info">
                      "I have nothing in common with lazy people who blame
                      others for their lack of success. Great things come form hard work
                      abd perseverance. No excuses
                      " <br></br>
                      <br></br>
                      <small>-Kobe Bryant</small>
                    </p>
                  </div>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/landingPageZuta1.jpg") + ")"
                    }}
                  ></div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/landingPageBajsevi.jpg") + ")"
                    }}
                  ></div>
                  <h3>
                    Sta nas cini tako posebnim?
                  </h3>
                  <p>
                    Trening sa Personalnim trenerom u FitBoxu-u se ne može uporediti ni sa jednim vašim
                    treningom koji ste sami odradili. Dobijate svog partnera za trening čiji je jedini zadatak
                    da vas motiviše i da postignete rezultate koje želite.
                    Bez obzira na to da li želite da povećete mišićnu masu,
                    da postanete zvezda na podijumu za igru, da za vama uzdišu
                    na plaži, da poboljšate zamah u golfu ili da postignete bolje
                    vreme u sledećem maratonu, naši Personalni treneri vam mogu pomoći u
                    tome . Takođe, možete dobiti pomoć sa rehabilitacijom od povreda ili sprečavanje
                    problema.

                    Pitate se kako? Lako!
                  </p>
                  <p>
                    Ukoliko ne znate kako da počnete, Personalni trener je tu da vas motiviše ali i da napravi plan:
                    – Prikupiće informacije vašem o zdravstvenom statusu
                    – Proceniće vašu fizičku formu
                    – Biće uz vas sve vreme kako bi sigurno i bez rizika postigli rezultat koji želite
                  </p>
                  <p>
                  Uz nase nutricioniste dobicete program ishrane koji ce vam 
                  pomoci da dodjete do zeljenih rezultata jos brze!
                  
                  </p>
                  <p>
                    Oporavak posle napornih treninga?
                    Nikad laksi uz nase masaze
                  </p>

                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="section section-team text-center">
          <Container>
            <h2 className="title">Ovo su nasi najbolji treneri</h2>
            <div className="team">
              <Row>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/PersonalTrener3.jpg")}
                    ></img>
                    <h4 className="title">Marija Peric</h4>
                    <p className="category text-info">Trener</p>
                    <p className="description">
                      Sve je do terninga, niko ne ustane ujutru i istrci maraton{" "}
                      . Snaga volje je kao misic, sto ga vise treniras to postaje jaci.
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-youtube"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-instagram"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-facebook-square"></i>
                    </Button>
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/PersonalTrener6.jpg")}
                    ></img>
                    <h4 className="title">Nikola Dragovic</h4>
                    <p className="category text-info">Trener</p>
                    <p className="description">
                      Jedini los trening je onaj koji nisi uradio{" "}
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-instagram"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-facebook"></i>
                    </Button>
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/PersonalTrener2.jpg")}
                    ></img>
                    <h4 className="title">Janko Pusic</h4>
                    <p className="category text-info">Trener</p>
                    <p className="description">
                      Treniranje ti ne menja samo telo. Treniranje ti menja i um i
                      stav i raspolozenje.{" "}
                      Najlepsi pogled dolazi nakon najtezeg penjanja
                     
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-facebook"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-youtube"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="section section-contact-us text-center">
          <Container>
            <h2 className="title">Zelite da dobijate novosti?</h2>
            <p className="description">Kontaktirajte nas.</p>
            <Row>
              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                <InputGroup
                  className={
                    "input-lg" + (firstFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons users_circle-08"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Ime i Prezime..."
                    type="text"
                    onFocus={() => setFirstFocus(true)}
                    onBlur={() => setFirstFocus(false)}
                  ></Input>
                </InputGroup>
                <InputGroup
                  className={
                    "input-lg" + (lastFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons ui-1_email-85"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email..."
                    type="text"
                    onFocus={() => setLastFocus(true)}
                    onBlur={() => setLastFocus(false)}
                  ></Input>
                </InputGroup>
                <div className="textarea-container">
                  <Input
                    cols="80"
                    name="name"
                    placeholder="Napisite poruku..."
                    rows="4"
                    type="textarea"
                  ></Input>
                </div>
                <div className="send-button">
                  <Button
                    block
                    className="btn-round"
                    color="info"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                    size="lg"
                  >
                    Posalji poruku
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default LandingPage;
