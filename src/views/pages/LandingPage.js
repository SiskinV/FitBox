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
  var svi_treninzi = [{
    name: 'Parental Yoga',
    comments: [] ,
    date: 'Ponedeljak',
    id:'0',
    vreme: '14-16',
  },{
    name: 'Grit',
    comments: [] ,
    date: 'Ponedeljak',
    id:'1',
    vreme: '16-18',
  },{
    name: 'Gluteus',
    comments: [] ,
    date: 'Ponedeljak',
    id:'2',
    vreme: '18-20',
  },{
    name: 'E-spinning',
    comments: [] ,
    date: 'Ponedeljak',
    id:'3',
    vreme: '20-22',
  },{
    name: 'Yoga',
    comments: [] ,
    date: 'Sreda',
    id:'4',
    vreme: '14-16',
  },{
    name: 'Pilates',
    comments: [] ,
    date: 'Sreda',
    id:'5',
    vreme: '16-18',
  },{
    name: 'Zumba',
    comments: [] ,
    date: 'Sreda',
    id:'6',
    vreme: '18-20',
  },{
    name: 'E-Core',
    comments: [] ,
    date: 'Sreda',
    id:'7',
    vreme: '20-22',
  },{
    name: 'Les Mills Body Step',
    comments: [] ,
    date: 'Petak',
    id:'8',
    vreme: '14-16',
  },{
    name: 'Les Mills Body Combat',
    comments: [] ,
    date: 'Petak',
    id:'9',
    vreme: '16-18',
  }
];
localStorage.setItem('sviTreninzi',JSON.stringify(svi_treninzi));
var jezik=true;
localStorage.setItem('Jezik',JSON.stringify(jezik));
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <LandingPageHeader />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Who are we?</h2>
                <h5 className="description">
                We are the new most modern gym in the city. We are located on Leka's hill.
                   New programs based on the reputation of the best gyms in the world together with nutritionists
                   and the massage space is the perfect combination for all athletes.
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
                      abd perseverance. No excuses.
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
                    What makes us special?
                  </h3>
                  <p>
                  Training with a Personal Trainer in FitBox cannot be compared to any of yours
                     training that you have done yourself. You get your training partner whose only task is
                     to motivate you and achieve the results you want.
                     Whether you want to gain muscle mass,
                     to become a star on the game podium, to sigh for you
                     on the beach, to improve your golf swing or to achieve better
                     time in the next marathon, our Personal Trainers can help you
                     tome. You can also get help with injury rehabilitation or prevention
                     problems.

                     Wondering how? Easy!
                  </p>
                  <p>
                  If you do not know how to start, the Personal Trainer is here to motivate you but also to make a plan:
                     - It will collect information about your health status
                     - They will assess your physical shape
                     - They will be with you all the time in order to achieve the result you want safely and without risk
                  </p>
                  <p>
                  With our nutritionists, you will receive a nutrition program that will help you
                   help you get the results you want even faster!
                  
                  </p>
                  <p>
                  Recovery after hard training?
                     Never lighter with our massages.
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
                    <h4 className="title">
                      <a className="link" href="http://localhost:3000/profile-page1">
                        Marija Peric
                      </a>
                    </h4>
                    <p className="category text-info">Trener</p>
                    <p className="description">
                    It's all about training, no one gets up in the morning and runs a marathon{" "}
                    . Willpower is like a muscle, the more you train it the stronger it becomes.
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
                    <h4 className="title">
                      <a href="http://localhost:3000/profile-page2" className="link">
                        Nikola Dragovic
                      </a>{" "}
                      </h4>
                    <p className="category text-info">Trener</p>
                    <p className="description">
                    The only bad workout is the one you didn’t do{" "}.
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
                    <h4 className="title">
                      <a href="http://localhost:3000/profile-page3" className="link">
                        Janko Pusic
                      </a>{" "}
                    </h4>
                    <p className="category text-info">Trener</p>
                    <p className="description">
                    Training doesn't just change your body. Coaching changes your mind
                       attitude and mood.{" "}
                       The most beautiful view comes after the hardest climbing.
                     
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
            <h2 className="title">Want to get news?</h2>
            <p className="description">Contact us.</p>
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
                    send a message
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
