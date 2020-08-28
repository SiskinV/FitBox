import React from "react";

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
import MassagePageHeader from "components/Headers/MassagePageHeader";

function ProfilePage1() {
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
                <MassagePageHeader />
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
                        The most modern massage techniques that are not unknown to our long-term experts, which will
                             You soften and repair your body after each workout. In addition to relaxation and sports massages that are
                             we also have massages that have arrived from other areas: India, Japan.
                         </h5>
                        <Row>
                            <Col className="ml-auto mr-auto" md="6">
                                <h4 className="title text-center">Vrste masaza</h4>
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
                                                        <CardTitle tag="h4">Relax massage</CardTitle>
                                                        <CardText>
                                                        The most commonly used type of massage. They are massaged superficially
                                                             muscle joints.This type of massage is gentle and relaxing.
                                                             It lasts 1 hour.
                                                        </CardText>
                                                        <p>Price: 1200din</p>
                                                    </CardBody>
                                                </Card>
                                                <Card style={{ width: "100%" }}>
                                                    <CardImg alt="..." data-src="holder.js/100px180/?text=Image cap" top></CardImg>
                                                    <CardBody>
                                                        <CardTitle tag="h4">Sports massage</CardTitle>
                                                        <CardText>
                                                        It is intended for people who are actively involved in sports because it is for her
                                                             the basic function is not relaxation, but injury prevention and augmentation
                                                             sports opportunities.It is mostly focused on stretching the muscles
                                                             It lasts 1 hour.
                                                        </CardText>
                                                        <p>Price: 1500din</p>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                            <Col md="6">
                                                <Card style={{ width: "100%" }}>
                                                    <CardImg alt="..." data-src="holder.js/100px180/?text=Image cap" top></CardImg>
                                                    <CardBody>
                                                        <CardTitle tag="h4">Siacu massage</CardTitle>
                                                        <CardText>
                                                        This is a Japanese massage where the masseur presses through acupuncture points
                                                             and each point improves your energy flow and restores your body to balance.
                                                             It stimulates the flow of life energy, Ci. It affects the stress of migraine back pain
                                                             obesity.
                                                             It takes about 45 minutes
                                                        </CardText>
                                                        <p>Price: 2000din</p>
                                                    </CardBody>
                                                </Card>
                                                <Card style={{ width: "100%" }}>
                                                    <CardImg alt="..." data-src="holder.js/100px180/?text=Image cap" top></CardImg>
                                                    <CardBody>
                                                        <CardTitle tag="h4">Massage with volcanic stones</CardTitle>
                                                        <CardText>
                                                        It is done by arranging warm stones on the body
                                                             to relax and regenerate. They are also massaged
                                                             and ligaments and muscles. Great for detoxification,
                                                             It takes about 90 minutes.
                                                        </CardText>
                                                        <p>Price: 3000din</p>
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
                                                        <CardTitle tag="h4">Aromatherapy</CardTitle>
                                                        <CardText>
                                                        This is a massage therapy that uses aromatic oils of your choice
                                                             choose according to the problem.These are usually relaxation and anti-stress.
                                                             It takes about 60 minutes.
                                                        </CardText>
                                                        <p>Price: 1000din</p>
                                                    </CardBody>
                                                </Card>
                                                <Card style={{ width: "100%" }}>
                                                    <CardImg alt="..." data-src="holder.js/100px180/?text=Image cap" top></CardImg>
                                                    <CardBody>
                                                        <CardTitle tag="h4">Anti-cellulite massage</CardTitle>
                                                        <CardText>
                                                        This is the most effective way to remove cellulite. It improves circulation
                                                             they expel toxins and strengthen the tissue. This is an intensive massage and that is why it is necessary
                                                             that the first massages be milder so that the client does not get bruises.
                                                             It takes about 30-40 minutes.
                                                        </CardText>
                                                        <p>Price: 2500din</p>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                            <Col md="6">
                                                <Card style={{ width: "100%" }}>
                                                    <CardImg alt="..." data-src="holder.js/100px180/?text=Image cap" top></CardImg>
                                                    <CardBody>
                                                        <CardTitle tag="h4">Ayurveda massage</CardTitle>
                                                        <CardText>
                                                        It is based on Indian medicine and has a very beneficial effect on prevention
                                                             hair loss, insomnia, migraine, wrinkle correction and skin cleansing.
                                                             They have a head massage and a body massage.
                                                             Head massage lasts 10-15 min.
                                                             Body massage lasts 90 min.
                                                        </CardText>
                                                        <p>Price: 2800din</p>
                                                    </CardBody>
                                                </Card>
                                                <Card style={{ width: "100%" }}>
                                                    <CardImg alt="..." data-src="holder.js/100px180/?text=Image cap" top></CardImg>
                                                    <CardBody>
                                                        <CardTitle tag="h4">Reflexology.</CardTitle>
                                                        <CardText>
                                                        This is a massage that is performed on the feet, while pressing certain points with which
                                                             stimulates the work of certain internal organs. It is very relaxing and has a beneficial effect
                                                             stress, indigestion,
                                                             hormonal balance, insomnia, back pain, PMS, poor circulation ..
                                                             It lasts from 30 to 50 minutes
                                                        </CardText>
                                                        <p>Price: 1000din</p>
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
                                                        <CardTitle tag="h4">Lymphatic drainage</CardTitle>
                                                        <CardText>
                                                        This massage is intended to increase lymph circulation, venous circulation,
                                                             detoxification and expulsion of excess fluid.
                                                             As such, it is suitable for people with varicose veins and capillaries,
                                                             eliminates the symptoms of "heavy" legs, is good in preventing and eliminating cellulite
                                                             and strengthening the immune system.
                                                             It takes 35 minutes.
                                                        </CardText>
                                                        <p>Price: 2200din</p>
                                                    </CardBody>
                                                </Card>

                                            </Col>
                                            <Col md="6">
                                                <Card style={{ width: "100%" }}>
                                                    <CardImg alt="..." data-src="holder.js/100px180/?text=Image cap" top></CardImg>
                                                    <CardBody>
                                                        <CardTitle tag="h4">Royal massage</CardTitle>
                                                        <CardText>
                                                        This is the mass of the so-called 4 hands. Refers to the simultaneous massage of 2 therapists
                                                             whereby one of them creates movements and the other follows. Thus a balance of fluid flow is achieved
                                                             in the body and the simultaneous relaxation of both sides of the body. Combines other massages.
                                                             It takes 60 minutes.
                                                        </CardText>
                                                        <p>Price: 3200din</p>
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
                                        <a href="http://localhost:3000/masnutrireserve-page">Book a massage </a>
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

export default ProfilePage1;
