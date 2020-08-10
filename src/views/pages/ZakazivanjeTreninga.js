import React from 'react';
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
var opis;
const klik =(event)=>{
    event.preventDefault();
    console.log(opis);
    var logovan;
    var korisnik=JSON.parse(localStorage.getItem('ulogovan'));
    var korisnici=JSON.parse(localStorage.getItem('users'));
    for (var i = 0; i < korisnici.length; i++) {
        if (korisnici[i].username == korisnik.username) {
           korisnici[i].trainings.name=opis;
           localStorage.setItem('users', JSON.stringify(korisnici));
           console.log(korisnici);
           break;
        }
      }

    }
const TrainingPage = () => {
    
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
                        <h3 className="title">O nama</h3>
                        <h5 className="description">
                            Naši treninzi pomažu korisnicima da ostvare željene ciljeve u što kraće vreme.
                            Ukoliko si nov pri vežbanju i nemaš veliko predznanje o svome telu ili se plašiš povreda,
                            tu su naši profesionalni treneri koji će te izvesti na pravi i željeni put.
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
                                                <i>Pon</i>
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
                                                <i>Sre</i>
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
                                                <i>Pet</i>
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
                                                        Prenatal yoga je savršena aktivnost za trudnice jer pruža psihofizičku pripremu za porođaj, opušta i smiruje telo, uči pravilnom držanju i ono što je možda i najlepše upoznaćete gomilu mama koje dele iste brige kao i vi!
                                                        Program Prenatal yoge je takav da se prilagođava trimestru u kome se trenutno nalazite, tako da ćete uvek vežbati bezbedno i u granicama svog trenutnog stanja i mogućnosti. Program se sastoji od brojnih fizičkih vežbi i asana, sadrži vežbe disanja za trudnice, kao i opuštanje – yoga Nidra!
                                                        Tokom trudnoće naše telo se stalno menja!
                                                        </CardText>
                                                        <Button  color="warning" onClick={e=>klik(e)}>Zakazi trening </Button>
                                                    </CardBody>
                                                </Card>
                                                <Card style={{ width: "100%" }}>
                                                    <CardImg alt="..." data-src="holder.js/100px180/?text=Image cap" top></CardImg>
                                                    <CardBody>
                                                        <CardTitle tag="h4">GRIT</CardTitle>
                                                        <CardText>
                                                        Kreiran radi sagorevanja masti i značajnog uvećanja atletskih sposobnosti, ova tridesetominutna tim trening sesija ne koristi nikakvu opremu osim samog tela. Trening vode obučeni treneri, i obezbeđuje izazov i intenzitet koji su vam neophodni da biste sopstveni trening preneli na viši nivo i zaista ostvarili rezultate.
                                                        </CardText>
                                                        <Button  color="warning" onClick={opis='GRIT17-18',e=>klik(e)}>Zakazi trening </Button>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                            <Col md="6">
                                                <Card style={{ width: "100%" }}>
                                                    <CardImg alt="..." data-src="holder.js/100px180/?text=Image cap" top></CardImg>
                                                    <CardBody>
                                                        <CardTitle tag="h4">Gluteus</CardTitle>
                                                        <CardText>
                                                        Gluteus je trening na kom se efikasno oblikuju zadnjica i noge. Za samo mesec dana mogu se videti merljivi rezultati promena na oblinama i vašoj zadnjici.
                                                        </CardText>
                                                        <Button  color="warning" onClick={e=>klik(e)}>Zakazi trening </Button>
                                                    </CardBody>
                                                </Card>
                                                <Card style={{ width: "100%" }}>
                                                    <CardImg alt="..." data-src="holder.js/100px180/?text=Image cap" top></CardImg>
                                                    <CardBody>
                                                        <CardTitle tag="h4">E-SPINNING</CardTitle>
                                                        <CardText>
                                                        Spining spada u najpopularnije kardio treninge.
                                                        Postoji razlog za to, osim što će te se dobro prezonijiti izgbućete
                                                        preko 500 kalorija.
                                                        </CardText>
                                                        <Button  color="warning" onClick={e=>klik(e)}>Zakazi trening </Button>
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
                                                        Tradicija vežbanja više hiljada godina, obuhvata fizičke vežbe i vežbe disanja u cilju poboljšanja kompletnog energetskog stanja čoveka. Praktična disciplina koja povezuje um, telo i duh na potpuno prirodan način. Vežbe deluju na najvažnije centre u telu podižući fizičko i mentalno zdravlje na viši nivo. Razvija se fizička snaga, povećava izdržljivost i fleksibilnost, ublažava umor i stres, a sa druge strane diže nivo energije u organizmu pa samim tim poboljšava celokupno zdravsveno stanje. Nema ograničenja, preporučuje se svima!
                                                        </CardText>
                                                        <Button  color="warning" onClick={e=>klik(e)}>Zakazi trening </Button>
                                                    </CardBody>
                                                </Card>
                                                <Card style={{ width: "100%" }}>
                                                    <CardImg alt="..." data-src="holder.js/100px180/?text=Image cap" top></CardImg>
                                                    <CardBody>
                                                        <CardTitle tag="h4">Pilates</CardTitle>
                                                        <CardText>
                                                        Pilates je zamišljen da bude kompletna disciplina fizičkog vežbanja.
                                                        Mada, možda će se početnicima činiti da on ne zadovoljava u dovoljnoj meri kardio-vaskularni trening. Ipak, jednom kada se u njemu usavršite, Pilates trening ojačaće i preoblikovati (izravnati) celo vaše telo. Pilates naširoko izbegava jake udarce, veliku izlaznu snagu i teška mišićna i skeletna opterećenja. Naglasak nije jednostavno na sticanju mišićne mase. Njegov fokus je jedinstven i stavlja naglasak na izduživanje i poravnjanje, i on može u tome veoma uspešno da uvežba mišiće predupređujući time razne povrede.
                                                        </CardText>
                                                        <Button  color="warning" onClick={e=>klik(e)}>Zakazi trening </Button>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                            <Col md="6">
                                                <Card style={{ width: "100%" }}>
                                                    <CardImg alt="..." data-src="holder.js/100px180/?text=Image cap" top></CardImg>
                                                    <CardBody>
                                                        <CardTitle tag="h4">Zumba</CardTitle>
                                                        <CardText>
                                                        Osnovana je 2001. godine. Zumba Fitnes je svetski brend koji spaja fitnes, zabavu i kulturu u uzbudljivi “dance” koncept! Zumba® treninzi u Beogradu u Ethnogymu na Banjici  su kao fitnes žurka koja sadrži latino muziku, latino plesove i koreografiju koja se lako prati. Dok se zabavljate na treningu ovaj aerobni program će vam pokrenuti celo telo, dobro će vas oznojiti i uneti osvežavajuću energiju dalekih južnih mora. Zumba utapa jednostavne plesne poktere u hipnotičke ritmove salse, sambe, tanga…
                                                        </CardText>
                                                        <Button  color="warning" onClick={e=>klik(e)}>Zakazi trening </Button>
                                                    </CardBody>
                                                </Card>
                                                <Card style={{ width: "100%" }}>
                                                    <CardImg alt="..." data-src="holder.js/100px180/?text=Image cap" top></CardImg>
                                                    <CardBody>
                                                        <CardTitle tag="h4">E-CORE</CardTitle>
                                                        <CardText>
                                                        E-Core je nov koncept grupnog fitness treninga.
                                                        Ovaj čas traje 30 minuta i fokusira se na abdomen, oblikus i leđne mišiće.
                                                        E-Core je ekspres program baziran na miksu jednostavnih i sigurnih vežbi.
                                                        Sa E- Core-om uživaćete u izazovu i uspehu vežbi koje će vas dovesti do željenih trbušnjaka
                                                        </CardText>
                                                        <Button  color="warning" onClick={e=>klik(e)}>Zakazi trening </Button>
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
                                                        BODYSTEP™ je energični trening sa steperom koji čini da se osećate slobodnim tokom treninga.  Ako saberemo podesive stepere, jednostavne korake (preko ili oko stepera) sa sjajnom muzikom koju svi pevaju i dostpunim instruktorom, koga ćete lako pratiti, imaćete sjajan trening. Kardio blokovi će probuditi vaš sistem za sagorevanje kalorija i ubaciti ga u sledeću brzinu, sve to praćeno kondicionim pesmama koje će oblikovati vaše telo.
                                                        </CardText>
                                                        <Button  color="warning" onClick={e=>klik(e)}>Zakazi trening </Button>
                                                    </CardBody>
                                                </Card>

                                            </Col>
                                            <Col md="6">
                                                <Card style={{ width: "100%" }}>
                                                    <CardImg alt="..." data-src="holder.js/100px180/?text=Image cap" top></CardImg>
                                                    <CardBody>
                                                        <CardTitle tag="h4">Les Mills Body Combat</CardTitle>
                                                        <CardText>
                                                        BODY COMBAT™ je grupni fitnes kadrio trening u kome ste svaki put vi pobednici. Jedini trening na kome možete totalno da oslobodite sve negativno iz sebe i da se nakon toga osećate sjajno. Ovaj energični program je inspirisan mešavinom borilačkih veština i koriste se pokreti iz raznih disciplina kao što su: karate, boks, tai chi i muay thai. Iskustvo koje vežbači dobijaju na treningu slušajući sjajnu motivacionu muziku i prateći savršene instruktore čini to da vežbači požele da nikad ne izađu iz ringa (fitnes sale). Baš to je ono što BODYCOMBAT™ čini svetski najpopularnijim   borilačkim fitnes treningom. Tokom ovog krajnje ratničkog treninga vi ćete udarati, napadati, šutirati i izvoditi katu i tim putem sagoriti mnogo kalorija. Kao i svi LES MILLS™ programi, na svaka tri meseca BODYCOMBAT™ dobija novu muziku i koreografiju koju dizajniraju najbolji Master treneri i MMA experti.
                                                        </CardText>
                                                        <Button  color="warning" onClick={e=>klik(e)}>Zakazi trening </Button>
                                                    </CardBody>
                                                </Card>

                                            </Col>
                                        </Row>
                                    </Col>
                                </TabPane>
                            </TabContent>
                        </Row>
                    </Container>
                </div>
                <DefaultFooter />
            </div>
        </>
    );
}

export default TrainingPage;