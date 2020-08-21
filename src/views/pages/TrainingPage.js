import React, { useState } from 'react';
// reactstrap components
import {
    Button,
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane,
    Container,
    Row,
    Col,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardText,
    UncontrolledTooltip
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader1 from "components/Headers/ProfilePageHeader1.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import TrainingPageHeader from "components/Headers/TrainingPageHeader";
let cntId = 0;
let plus = [4, 5, 7, 0, 2, 1, 4, 5, 7, 6];
let minus = [2, 1, 7, 3, 2, 5, 1, 2, 1, 3];
let ocena = [[4.56, 10], [2.11, 7], [3.27, 8], [4.11, 8], [3.86, 9], [3.77, 7], [4.15, 6], [4.10, 10], [4.15, 14], [4.77, 7]]
const pplus = (e, id) => {
    plus[id] += 1;
    console.log(plus);
    console.log(ocena[0][1]);
}
const mminus = (e, id) => {
    minus[id] += 1;
    console.log(minus);
}
const ocenjivanje=(e,id,zadato)=>{
var moze=false;
    var korisnik=JSON.parse(localStorage.getItem('ulogovan'));
    var korisnici=JSON.parse(localStorage.getItem('users'));
    var trng=JSON.parse(localStorage.getItem('sviTreninzi'));
    for (var i = 0; i < korisnici.length; i++) {
        if (korisnici[i].username == korisnik.username) {
           //korisnici[i].opis=(trng[id]);
           for(var j=0;j<korisnici[i].trainings.length;j++)// MOZDA TREVA J OD 0
           {
            var pp=korisnici[i].trainings[j].id;
            console.log(korisnici[i].trainings);
           if(parseInt(korisnici[i].trainings[j].id)==id)moze=true;
           console.log(moze,korisnici[i].trainings[j].id);
           }
        }
      }
if(moze){
ocena[id][0]=(ocena[id][0]*ocena[id][1]+zadato)/(ocena[id][1]+1);
ocena[id][1]+=1;
}
}
const TrainingPage = () => {

    const [buttonText1, setButtonText1] = React.useState(ocena[0][0]);
    const [buttonText2, setButtonText2] = React.useState(ocena[1][0]);
    const [buttonText3, setButtonText3] = React.useState(ocena[2][0]);
    const [buttonText4, setButtonText4] = React.useState(ocena[3][0]);
    const [buttonText5, setButtonText5] = React.useState(ocena[4][0]);
    const [buttonText6, setButtonText6] = React.useState(ocena[5][0]);
    const [buttonText7, setButtonText7] = React.useState(ocena[6][0]);
    const [buttonText8, setButtonText8] = React.useState(ocena[7][0]);
    const [buttonText9, setButtonText9] = React.useState(ocena[8][0]);
    const [buttonText10, setButtonText10] = React.useState(ocena[9][0]);

    const [pills, setPills] = React.useState("2");
    React.useEffect(() => {
        document.body.classList.add("profile-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        return function cleanup() {
            document.body.classList.remove("profile-page");
            document.body.classList.remove("sidebar-collapse");
        };
    });

    return (
        <>
            <IndexNavbar />
            <div className="wrapper">
                <TrainingPageHeader />
                <div className="section">
                    <Container>
                        <div className="button-container">
                            <Button className="btn-round" color="info" size="lg">
                                Follow
                            </Button>
                            <Button
                                className="btn-round btn-icon"
                                color="default"
                                id="tooltip515203352"
                                size="lg"
                            >
                                <i className="fab fa-twitter"></i>
                            </Button>
                            <UncontrolledTooltip delay={0} target="tooltip515203352">
                                Follow me on Twitter
              </UncontrolledTooltip>
                            <Button
                                className="btn-round btn-icon"
                                color="default"
                                id="tooltip340339231"
                                size="lg"
                            >
                                <i className="fab fa-instagram"></i>
                            </Button>
                            <UncontrolledTooltip delay={0} target="tooltip340339231">
                                Follow me on Instagram
              </UncontrolledTooltip>
                        </div>
                        <h3 className="title">About us</h3>
                        <h5 className="description">
                        Our trainings help users achieve the desired goals in the shortest possible time.
                             If you are new to exercise and do not have a great knowledge of your body or are afraid of injury,
                             there are our professional trainers who will guide you on the right and desired path.


                         </h5>
                        <Row>
                            <Col className="ml-auto mr-auto" md="6">
                                <h4 className="title text-center">Vrste treninga</h4>
                                <div className="nav-align-center">
                                    <Nav
                                        className="nav-pills-info nav-pills-just-icons"
                                        pills
                                        role="tablist"
                                    >
                                        <NavItem>
                                            <NavLink
                                                className={pills === "1" ? "active" : ""}
                                                href="#pablo"
                                                onClick={e => {
                                                    e.preventDefault();
                                                    setPills("1");
                                                }}
                                            >
                                                <i>1</i>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={pills === "2" ? "active" : ""}
                                                href="#pablo"
                                                onClick={e => {
                                                    e.preventDefault();
                                                    setPills("2");
                                                }}
                                            >
                                                <i>2</i>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={pills === "3" ? "active" : ""}
                                                href="#pablo"
                                                onClick={e => {
                                                    e.preventDefault();
                                                    setPills("3");
                                                }}
                                            >
                                                <i>3</i>
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </div>
                            </Col>
                            <TabContent className="gallery" activeTab={"pills" + pills}>
                                <TabPane tabId="pills1">
                                    <Col className="ml-auto mr-auto" md="10">
                                        <Row className="collections">
                                            <Col md="6">
                                                <Card style={{ width: "100%" }}>
                                                    <CardImg alt="..." data-src="holder.js/100px180/?text=Image cap" top></CardImg>
                                                    <CardBody>
                                                        <CardTitle tag="h4">Prenatal Yoga</CardTitle>
                                                        <CardText>
                                                        Prenatal yoga is a perfect activity for pregnant women because it provides psychophysical preparation for childbirth, relaxes and calms the body, teaches proper posture and what is perhaps the most beautiful you will meet a bunch of moms who share the same worries as you!
                                                             The Prenatal yoga program is such that it adapts to the trimester you are currently in, so you will always practice safely and within the limits of your current condition and capabilities. The program consists of numerous physical exercises and asanas, contains breathing exercises for pregnant women, as well as relaxation - yoga Nidra!
                                                             During pregnancy, our body is constantly changing!
                                                        </CardText>
                                                        <CardText>
                                                            Duration: 2h
                                                            Weight:2
                                                        </CardText>
                                                        <Button color="warning" onClick={(e) => { ocenjivanje(e, 0, 1); }}>1</Button>
                                                        <Button color="warning" onClick={(e) => { ocenjivanje(e, 0, 2); }}>2</Button>
                                                        <Button color="warning" onClick={(e) => { ocenjivanje(e, 0, 3); }}>3</Button>
                                                        <Button color="warning" onClick={(e) => { ocenjivanje(e, 0, 4); }}>4</Button>
                                                        <Button color="warning" onClick={(e) => { ocenjivanje(e, 0, 5); }}>5</Button>
                                                        <Button color="warning" onClick={(e) => { setButtonText1(Number(Math.round(parseFloat(ocena[0][0] + 'e' + 2)) + 'e-' + 2)) }}>ocena: {buttonText1}</Button>

                                                    </CardBody>
                                                </Card>
                                                <Card style={{ width: "100%" }}>
                                                    <CardImg alt="..." data-src="holder.js/100px180/?text=Image cap" top></CardImg>
                                                    <CardBody>
                                                        <CardTitle tag="h4">GRIT</CardTitle>
                                                        <CardText>
                                                        Created to burn fat and significantly increase athletic ability, this thirty-minute team training session uses no equipment other than the body itself. The training is led by trained trainers, and provides the challenge and intensity you need to take your own training to the next level and really achieve results.
                                                        </CardText>
                                                        <CardText>
                                                            Duration: 2h
                                                            Weight:2
                                                        </CardText>
                                                        <Button color="warning" onClick={(e) => { ocenjivanje(e, 1, 1); }}>1</Button>
                                                        <Button color="warning" onClick={(e) => { ocenjivanje(e, 1, 2); }}>2</Button>
                                                        <Button color="warning" onClick={(e) => { ocenjivanje(e, 1, 3); }}>3</Button>
                                                        <Button color="warning" onClick={(e) => { ocenjivanje(e, 1, 4); }}>4</Button>
                                                        <Button color="warning" onClick={(e) => { ocenjivanje(e, 1, 5); }}>5</Button>
                                                        <Button color="warning" onClick={(e) => { setButtonText2(Number(Math.round(parseFloat(ocena[1][0] + 'e' + 2)) + 'e-' + 2)) }}>ocena: {buttonText2}</Button>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                            <Col md="6">
                                                <Card style={{ width: "100%" }}>
                                                    <CardImg alt="..." data-src="holder.js/100px180/?text=Image cap" top></CardImg>
                                                    <CardBody>
                                                        <CardTitle tag="h4">Gluteus</CardTitle>
                                                        <CardText>
                                                        Gluteus is a training in which the buttocks and legs are effectively shaped. In just a month, you can see measurable results of changes in curves and your buttocks.
                                                        </CardText>
                                                        <CardText>
                                                            Duration: 2h
                                                            Weight:2
                                                        </CardText>
                                                        <Button color="warning" onClick={(e) => { ocenjivanje(e, 2, 1); }}>1</Button>
                                                        <Button color="warning" onClick={(e) => { ocenjivanje(e, 2, 2); }}>2</Button>
                                                        <Button color="warning" onClick={(e) => { ocenjivanje(e, 2, 3); }}>3</Button>
                                                        <Button color="warning" onClick={(e) => { ocenjivanje(e, 2, 4); }}>4</Button>
                                                        <Button color="warning" onClick={(e) => { ocenjivanje(e, 2, 5); }}>5</Button>
                                                        <Button color="warning" onClick={(e) => { setButtonText3(Number(Math.round(parseFloat(ocena[2][0] + 'e' + 2)) + 'e-' + 2)) }}>ocena: {buttonText3}</Button>
                                                    </CardBody>
                                                </Card>
                                                <Card style={{ width: "100%" }}>
                                                    <CardImg alt="..." data-src="holder.js/100px180/?text=Image cap" top></CardImg>
                                                    <CardBody>
                                                        <CardTitle tag="h4">E-SPINNING</CardTitle>
                                                        <CardText>
                                                        Spinning is one of the most popular cardio workouts.
                                                             There is a reason for this, apart from the fact that you will lose weight well
                                                             over 500 calories.
                                                        </CardText>
                                                        <CardText>
                                                            Duration: 2h
                                                            Weight:4
                                                        </CardText>
                                                        <Button color="warning" onClick={(e) => { ocenjivanje(e, 3, 1); }}>1</Button>
                                                        <Button color="warning" onClick={(e) => { ocenjivanje(e, 3, 2); }}>2</Button>
                                                        <Button color="warning" onClick={(e) => { ocenjivanje(e, 3, 3); }}>3</Button>
                                                        <Button color="warning" onClick={(e) => { ocenjivanje(e, 3, 4); }}>4</Button>
                                                        <Button color="warning" onClick={(e) => { ocenjivanje(e, 3, 5); }}>5</Button>
                                                        <Button color="warning" onClick={(e) => { setButtonText4(Number(Math.round(parseFloat(ocena[3][0] + 'e' + 2)) + 'e-' + 2)) }}>ocena: {buttonText4}</Button>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Col>
                                </TabPane>
                                <TabPane tabId="pills2">
                                    <Col className="ml-auto mr-auto" md="10">
                                        <Row className="collections">
                                            <Col md="6">
                                                <Card style={{ width: "100%" }}>
                                                    <CardImg alt="..." data-src="holder.js/100px180/?text=Image cap" top></CardImg>
                                                    <CardBody>
                                                        <CardTitle tag="h4">Yoga</CardTitle>
                                                        <CardText>
                                                        The tradition of exercising for thousands of years includes physical exercises and breathing exercises in order to improve the complete energy state of a person. A practical discipline that connects the mind, body and spirit in a completely natural way. Exercise works on the most important centers in the body, raising physical and mental health to a higher level. It develops physical strength, increases endurance and flexibility, relieves fatigue and stress, and on the other hand raises the level of energy in the body and thus improves overall health. No restrictions, recommended for everyone!
                                                        </CardText>
                                                        <CardText>
                                                            Duration: 2h
                                                            Weight:1
                                                        </CardText>
                                                        <Button color="warning" onClick={(e) => { ocenjivanje(e, 4, 1); }}>1</Button>
                                                        <Button color="warning" onClick={(e) => { ocenjivanje(e, 4, 2); }}>2</Button>
                                                        <Button color="warning" onClick={(e) => { ocenjivanje(e, 4, 3); }}>3</Button>
                                                        <Button color="warning" onClick={(e) => { ocenjivanje(e, 4, 4); }}>4</Button>
                                                        <Button color="warning" onClick={(e) => { ocenjivanje(e, 4, 5); }}>5</Button>
                                                        <Button color="warning" onClick={(e) => { setButtonText5(Number(Math.round(parseFloat(ocena[4][0] + 'e' + 2)) + 'e-' + 2)) }}>ocena: {buttonText5}</Button>
                                                    </CardBody>
                                                </Card>
                                                <Card style={{ width: "100%" }}>
                                                    <CardImg alt="..." data-src="holder.js/100px180/?text=Image cap" top></CardImg>
                                                    <CardBody>
                                                        <CardTitle tag="h4">Pilates</CardTitle>
                                                        <CardText>
                                                        Pilates largely avoids high impact, high power output, and heavy muscular and skeletal loading.
                                                             Although, it may seem to beginners that it does not satisfy cardiovascular training to a sufficient extent. However, once you improve in it, Pilates training will strengthen and reshape (flatten) your entire body. Pilates largely avoids high impact, high power output, and heavy muscular and skeletal strain. The emphasis is not simply on gaining muscle mass. His focus is unique and he emphasizes stretching and straightening, and he can train his muscles very successfully, thus preventing various injuries.
                                                        </CardText>
                                                        <CardText>
                                                            Duration: 2h
                                                            Weight:3
                                                        </CardText>
                                                        <Button color="warning" onClick={(e) => { ocenjivanje(e, 5, 1); }}>1</Button>
                                                        <Button color="warning" onClick={(e) => { ocenjivanje(e, 5, 2); }}>2</Button>
                                                        <Button color="warning" onClick={(e) => { ocenjivanje(e, 5, 3); }}>3</Button>
                                                        <Button color="warning" onClick={(e) => { ocenjivanje(e, 5, 4); }}>4</Button>
                                                        <Button color="warning" onClick={(e) => { ocenjivanje(e, 5, 5); }}>5</Button>
                                                        <Button color="warning" onClick={(e) => { setButtonText6(Number(Math.round(parseFloat(ocena[5][0] + 'e' + 2)) + 'e-' + 2)) }}>ocena: {buttonText6}</Button>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                            <Col md="6">
                                                <Card style={{ width: "100%" }}>
                                                    <CardImg alt="..." data-src="holder.js/100px180/?text=Image cap" top></CardImg>
                                                    <CardBody>
                                                        <CardTitle tag="h4">Zumba</CardTitle>
                                                        <CardText>
                                                        It was founded in 2001. Zumba Fitness is a global brand that combines fitness, entertainment and culture into an exciting "dance" concept! Zumba® trainings in Belgrade at Ethnogym in Banjica are like a fitness party that contains Latin music, Latin dances and choreography that is easy to follow. While you are having fun in training, this aerobic program will move your whole body, sweat you well and bring in the refreshing energy of the distant southern seas. Zumba drowns simple dance pokers into hypnotic rhythms of salsa, samba, tango…
                                                        </CardText>
                                                        <CardText>
                                                            Duration: 2h
                                                            Weight:1
                                                        </CardText>
                                                        <Button color="warning" onClick={(e) => { ocenjivanje(e, 6, 1); }}>1</Button>
                                                        <Button color="warning" onClick={(e) => { ocenjivanje(e, 6, 2); }}>2</Button>
                                                        <Button color="warning" onClick={(e) => { ocenjivanje(e, 6, 3); }}>3</Button>
                                                        <Button color="warning" onClick={(e) => { ocenjivanje(e, 6, 4); }}>4</Button>
                                                        <Button color="warning" onClick={(e) => { ocenjivanje(e, 6, 5); }}>5</Button>
                                                        <Button color="warning" onClick={(e) => { setButtonText7(Number(Math.round(parseFloat(ocena[6][0] + 'e' + 2)) + 'e-' + 2)) }}>ocena: {buttonText7}</Button>
                                                    </CardBody>
                                                </Card>
                                                <Card style={{ width: "100%" }}>
                                                    <CardImg alt="..." data-src="holder.js/100px180/?text=Image cap" top></CardImg>
                                                    <CardBody>
                                                        <CardTitle tag="h4">E-CORE</CardTitle>
                                                        <CardText>
                                                        E-Core is a new concept of group fitness training.
                                                             This class lasts 30 minutes and focuses on the abdomen, shape and back muscles.
                                                             E-Core is an express program based on a mix of simple and safe exercises.
                                                             With E-Core you will enjoy the challenge and success of exercises that will lead you to the desired abs
                                                        </CardText>
                                                        <CardText>
                                                            Duration: 2h
                                                            Weight:3
                                                        </CardText>
                                                        <Button color="warning" onClick={(e) => { ocenjivanje(e, 7, 1); }}>1</Button>
                                                        <Button color="warning" onClick={(e) => { ocenjivanje(e, 7, 2); }}>2</Button>
                                                        <Button color="warning" onClick={(e) => { ocenjivanje(e, 7, 3); }}>3</Button>
                                                        <Button color="warning" onClick={(e) => { ocenjivanje(e, 7, 4); }}>4</Button>
                                                        <Button color="warning" onClick={(e) => { ocenjivanje(e, 7, 5); }}>5</Button>
                                                        <Button color="warning" onClick={(e) => { setButtonText8(Number(Math.round(parseFloat(ocena[7][0] + 'e' + 2)) + 'e-' + 2)) }}>ocena: {buttonText8}</Button>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Col>
                                </TabPane>
                                <TabPane tabId="pills3">
                                    <Col className="ml-auto mr-auto" md="10">
                                        <Row className="collections">
                                            <Col md="6">
                                                <Card style={{ width: "100%" }}>
                                                    <CardImg alt="..." data-src="holder.js/100px180/?text=Image cap" top></CardImg>
                                                    <CardBody>
                                                        <CardTitle tag="h4">Les Mills Body Step</CardTitle>
                                                        <CardText>
                                                        BODYSTEP ™ is an energetic training with a stepper that makes you feel free during training. If we add adjustable steppers, simple steps (over or around the steppers) with great music that everyone sings and an accessible instructor, when you will easily follow, you will have a great workout. Cardio blocks will wake up your calorie burning system and put it in the next gear, all accompanied by fitness songs that will shape your body.
                                                        </CardText>
                                                        <CardText>
                                                            Duration: 2h
                                                            Weight:3
                                                        </CardText>
                                                        <Button color="warning" onClick={(e) => { ocenjivanje(e, 8, 1); }}>1</Button>
                                                        <Button color="warning" onClick={(e) => { ocenjivanje(e, 8, 2); }}>2</Button>
                                                        <Button color="warning" onClick={(e) => { ocenjivanje(e, 8, 3); }}>3</Button>
                                                        <Button color="warning" onClick={(e) => { ocenjivanje(e, 8, 4); }}>4</Button>
                                                        <Button color="warning" onClick={(e) => { ocenjivanje(e, 8, 5); }}>5</Button>
                                                        <Button color="warning" onClick={(e) => { setButtonText9(Number(Math.round(parseFloat(ocena[8][0] + 'e' + 2)) + 'e-' + 2)) }}>ocena: {buttonText9}</Button>
                                                    </CardBody>
                                                </Card>

                                            </Col>
                                            <Col md="6">
                                                <Card style={{ width: "100%" }}>
                                                    <CardImg alt="..." data-src="holder.js/100px180/?text=Image cap" top></CardImg>
                                                    <CardBody>
                                                        <CardTitle tag="h4">Les Mills Body Combat</CardTitle>
                                                        <CardText>
                                                        BODY COMBAT ™ is a group fitness cadre training in which you are the winner every time. The only training where you can totally release everything negative from yourself and feel great afterwards. This energetic program is inspired by a mixture of martial arts and uses movements from various disciplines such as: karate, boxing, tai chi and muay thai. The experience that exercisers gain in training by listening to great motivational music and following perfect instructors makes exercisers want to never leave the ring (gym). This is exactly what makes BODYCOMBAT ™ the world's most popular martial fitness training. During this ultimate warrior training, you will hit, attack, shoot and perform the floor and burn a lot of calories that way. Like all LES MILLS programs, every three months BODYCOMBAT receives new music and choreography designed by the best Master trainers and MMA experts.
                                                        </CardText>
                                                        <CardText>
                                                            Duration: 2h
                                                            Weight:4
                                                        </CardText>
                                                        <Button color="warning" onClick={(e) => { ocenjivanje(e, 9, 1); }}>1</Button>
                                                        <Button color="warning" onClick={(e) => { ocenjivanje(e, 9, 2); }}>2</Button>
                                                        <Button color="warning" onClick={(e) => { ocenjivanje(e, 9, 3); }}>3</Button>
                                                        <Button color="warning" onClick={(e) => { ocenjivanje(e, 9, 4); }}>4</Button>
                                                        <Button color="warning" onClick={(e) => { ocenjivanje(e, 9, 5); }}>5</Button>
                                                        <Button color="warning" onClick={(e) => { setButtonText10(Number(Math.round(parseFloat(ocena[9][0] + 'e' + 2)) + 'e-' + 2)) }}>ocena: {buttonText10}</Button>
                                                    </CardBody>
                                                </Card>

                                            </Col>
                                        </Row>
                                    </Col>
                                </TabPane>
                            </TabContent>
                        </Row>
                        <Row>
                            <Col className="ml-auto mr-auto" md="12">
                                <div className="title text-center">
                                    <Button color="warning">
                                        <a href="http://localhost:3000/zakazi-page">Schedule training </a>
                                        {/* href="http://localhost:3000/masnutrireserve-page" */}
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

export default TrainingPage;