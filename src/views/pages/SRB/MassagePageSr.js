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
import IndexNavbarSr from "components/Navbars/IndexNavbarSr.js";
import ProfilePageHeader1 from "components/Headers/ProfilePageHeader1.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import MassagePageHeaderSr from "components/Headers/SRB/MassagePageHeaderSr.js";

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
            <IndexNavbarSr />
            <div className="wrapper">
                <MassagePageHeaderSr />
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
                        <h3 className="title">O nama</h3>
                        <h5 className="description">
                            Najmodernije tehnike masiranja koje nasim visegodisnjim strucnjacima nisu nepoznate, koje ce
                            Vam ublaziti i opraviti telo posle svakog treninga. Pored relaks i sportskih masaza koje su
                            uobicajene imamo i masaze koje su stigle sa drugih podrucja: Indije,Japana.
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
                                                        <CardTitle tag="h4">Relaks masaza</CardTitle>
                                                        <CardText>
                                                            Najcesce primenjivana vrsta masaze.Masiraju se povrsinski
                                                            spojevi misica.Ova vrsta masaze je nezna i opustajuca.
                                                            Traje 1 sat.
                                                        </CardText>
                                                        <p>Cena: 1200din</p>
                                                    </CardBody>
                                                </Card>
                                                <Card style={{ width: "100%" }}>
                                                    <CardImg alt="..." data-src="holder.js/100px180/?text=Image cap" top></CardImg>
                                                    <CardBody>
                                                        <CardTitle tag="h4">Sportska masaza</CardTitle>
                                                        <CardText>
                                                            Namenjena je osobama koje se aktvno bave sportom jer joj je
                                                            osnovna funkcija nije opustanje,vec sprecavanje povreda i poveccanje
                                                            sportskih mogucnosti.Najvise je orijentisana na istezanje misica
                                                            Traje 1 sat.
                                                        </CardText>
                                                        <p>Cena: 1500din</p>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                            <Col md="6">
                                                <Card style={{ width: "100%" }}>
                                                    <CardImg alt="..." data-src="holder.js/100px180/?text=Image cap" top></CardImg>
                                                    <CardBody>
                                                        <CardTitle tag="h4">Sijacu masaza</CardTitle>
                                                        <CardText>
                                                            Ovo je japanska masaza gde maser pritiska niz akupunkturnih tacaka
                                                            i svak tacka poboljsava vas protok energije i vraca telo u balans.
                                                            Njom stimulise protok zivotne energije,Ci. Deluje na stres migrenu bol u ledjima
                                                            gojaznost.
                                                            Traje oko 45 minuta
                                                        </CardText>
                                                        <p>Cena: 2000din</p>
                                                    </CardBody>
                                                </Card>
                                                <Card style={{ width: "100%" }}>
                                                    <CardImg alt="..." data-src="holder.js/100px180/?text=Image cap" top></CardImg>
                                                    <CardBody>
                                                        <CardTitle tag="h4">Masaza vulkanskim kamenjem</CardTitle>
                                                        <CardText>
                                                            Radi se tako sto se toplo kamenje poredja po telu
                                                            da bi se ono opustilo i regenerisalo.Masiraju se takodje
                                                            i ligamenti i misici.Odlicna je za detoksikaciju,
                                                            Traje oko 90 min.
                                                        </CardText>
                                                        <p>Cena: 3000din</p>
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
                                                        <CardTitle tag="h4">Aromaterapija</CardTitle>
                                                        <CardText>
                                                            Ovo je masazna terapija u kojoj se koriste aromaticna ulja koja biraju se
                                                            biraju prema problemu.To su obicno opustanje i anti-stres.
                                                            Traje oko 60 min.
                                                        </CardText>
                                                        <p>Cena: 1000din</p>
                                                    </CardBody>
                                                </Card>
                                                <Card style={{ width: "100%" }}>
                                                    <CardImg alt="..." data-src="holder.js/100px180/?text=Image cap" top></CardImg>
                                                    <CardBody>
                                                        <CardTitle tag="h4">Anticelulit masaza</CardTitle>
                                                        <CardText>
                                                            Ovo je najefikasniji nacin uklanjanja celulita.Njom se poboljsava cirkulacija
                                                            izbacuju toksini i ojacava tkivo.Ovo je intenzivna masaza i zato je potrebno
                                                            da prve masaze budu blaze da klijent ne bi dobio modrice.
                                                            Traje oko 30-40 min.
                                                        </CardText>
                                                        <p>Cena: 2500din</p>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                            <Col md="6">
                                                <Card style={{ width: "100%" }}>
                                                    <CardImg alt="..." data-src="holder.js/100px180/?text=Image cap" top></CardImg>
                                                    <CardBody>
                                                        <CardTitle tag="h4">Ayurveda masaza</CardTitle>
                                                        <CardText>
                                                            Zasnovana je na indijskoj medicini i ima jako povoljno dejstvo na prevenciju
                                                            opadanja kose,nesanicu,migrenu,ispravljanje bora i prociscenje koze.
                                                            Imaju masaza glave i masaza tela.
                                                            Masaza glave traje 10-15 min.
                                                            Masaza tela traja 90 min.
                                                        </CardText>
                                                        <p>Cena: 2800din</p>
                                                    </CardBody>
                                                </Card>
                                                <Card style={{ width: "100%" }}>
                                                    <CardImg alt="..." data-src="holder.js/100px180/?text=Image cap" top></CardImg>
                                                    <CardBody>
                                                        <CardTitle tag="h4">Refleksologija</CardTitle>
                                                        <CardText>
                                                            Ovo je masaža koja se sprovodi na stoplima, pri čemu se pritiskaju određene tačke kojima
                                                            se stimuliše rad određenih unutrašnjih organa. Vrlo je opuštajuća i povoljno deluje
                                                            na stres, poremećaje u varenju,
                                                            hormonsku ravnotežu, nesanicu, bolove u leđima, PMS, lošu cirkulaciju..
                                                            Traje od 30 do 50 minuta
                                                        </CardText>
                                                        <p>Cena: 1000din</p>
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
                                                        <CardTitle tag="h4">Limfna drenaza</CardTitle>
                                                        <CardText>
                                                            Ova masaza je namenjena povećanju cirkulacije limfe, venske cirkulacije,
                                                            detokcikaciji i izbacivanju viška tečnosti.
                                                            Kao takva pogodije osobama sa proširenim venama i kapilarima,
                                                            otklanja simptome “teških” nogu , dobra je u prevenciji i otklanjanju celulita
                                                            i jacanju imunog sistema.
                                                            Traje 35 min.
                                                        </CardText>
                                                        <p>Cena: 2200din</p>
                                                    </CardBody>
                                                </Card>

                                            </Col>
                                            <Col md="6">
                                                <Card style={{ width: "100%" }}>
                                                    <CardImg alt="..." data-src="holder.js/100px180/?text=Image cap" top></CardImg>
                                                    <CardBody>
                                                        <CardTitle tag="h4">Kraljevska masaza</CardTitle>
                                                        <CardText>
                                                            Ovo je masa tzv. 4 ruke.Odnosi se na istovremeno masiranje od 2 terapeuta
                                                            pri cemu jedan od njih kreira pokrete a drugi prati.Tako se postize balans protoka tecnosti
                                                            u organizmu i istovremeno opustanje obe strane tela. Objedinjuje ostale masaze.
                                                            Traje 60 min.
                                                        </CardText>
                                                        <p>Cena: 3200din</p>
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
                                        <a href="http://localhost:3000/masnutrireserve-pageSr">Zakazi masazu </a>
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
