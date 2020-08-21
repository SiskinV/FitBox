import React from 'react';
import IndexNavbarSr from 'components/Navbars/IndexNavbarSr';
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import NutritionistHeaderSr from 'components/Headers/SRB/NutritionistHeaderSr.js';

import {
    Container,
    Row,
    Col,
    Button
} from 'reactstrap';
import DefaultFooter from 'components/Footers/DefaultFooter';

const NutrtionistPage = () => {

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
            <IndexNavbarSr />
            <div className="wrapper">
                <NutritionistHeaderSr />
                <div className="section section-about-us">
                    <Container>
                    <Row>
                        <Col className="ml-auto mr-auto text-center" md="8">
                            <h2 className="title">Trening vs Ishrana?</h2>
                            <h5 className="description">
                                Ne kazu dzabe da je trening 30% a ishrana 70%.Trening bez zdrave ishrane gotovo da nema efekta.
                                Trening i ishrana su vezani jedno za drugo i ne mogu jedno bez drugog.Bez obzira da li zelite
                                da skinete masno tkivo ili da dobijete misice ishrana je veoma bitan faktor.
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
                                        "url(" + require("assets/img/zdravaHrana/zdravaHrana2.jpg") + ")"
                                }}
                            >
                                <p className="blockquote blockquote-info">
                                "Today, more than 95% of all chronic disease
                                is caused by food choice,toxic food ingredients,
                                nutritional deficiencies and lack of physical exercise." <br></br>
                                <br></br>
                                <small>-Mike Adams</small>
                                </p>
                            </div>
                            <div
                                className="image-container"
                                style={{
                                backgroundImage:
                                        "url(" + require("assets/img/zdravaHrana/zdravaHrana3.jpg") + ")"
                                }}
                            ></div>
                            </Col>
                            <Col md="5">
                            <div
                                className="image-container image-right"
                                style={{
                                backgroundImage:
                                    "url(" + require("assets/img/zdravaHrana/zdravaHrana4.jpg") + ")"
                                }}
                            ></div>
                            <h3>
                                Sta nas cini tako posebnim?
                            </h3>
                            <p>
                                        Gospodin Šeno deli ljude na 5 tipova, u zavisnosti od psiholoških i  zdravstvenih problema. Zapamtite - 
                                        ne postoje univerzalni saveti ishrane za sve. Jednostavno postoje okviri oko kojih se gradi vaša individualna ishrana, piše Stil.kurir.rs
                                        U podnožju italijanskih Alpa nalazi se selo Merano. Često možete čuti o njemu na televiziji,
                                         jer su poznate ličnosti okupirale ovo seoce. Zašto? Zato što u seoskoj ambulanti u Meranu radi najbolji nutricionista na svetu Anri Šeno!
                                        U njegovoj klinici ljudi se uče da pravilno jedu i uopšteno, kako da se ponašaju u novom vremenu.
                                        Gospodin Šeno se smatra specijalistom za zdravu ishranu, a napisao je i mnoge knjige o tome.

                                         

                                        Danas govorimo o onome što Šeno smatra zdravom ishranom. Bili smo iznenađeni jer su mnoge 
                                        stvari koje on govori u suprotnosti sa novim trendovima u mršavljenju. Ali kada pogledate srećna i zdrava lica pacijenata, 
                                        shvatate da je  nutricinista za mnoge stvari u pravu. Mnogi njegovi pacijenti vremenom su mu postali prijatelji, među kojima je i 
                                        princeza od Monaka. 
                                        
                            </p>
                            <p>
                                
                                        Šeno tvrdi: "Kafa nije najbolji početak dana. I nije važno da li je crna ili sa mlekom. 
                                        Interesantna činjenica: Ako je neko danas pio kafu sa mlekom i sutradan je umro. 
                                        Autopsija otkrije neprobavljenu kafu sa mlekom u njegovom želucu!
                                        Zato je najbolje piti zeleni čaj  ujutru, a najviše 1 šoljicu espresa tokom dana! 
                                        Uostalom, kafa bi trebalo da bude jaka i što je najvažnije - trebalo bi da je kratka!"
                                        Nutricionisti se slažu da ujutru želudac ne bi trebalo opeterećivati. 
                                        Važno je da želudac lagano radi, a ne da ga preopteretite za ceo dan. 
                                        "Ja doručkujem voće. Ručak počinjem salatom, a zatim uzmem ugljene 
                                        hidrate: pirinač ili testeninu. Uveče jedem supu od povrća.
                            </p>
                            <p>
                            
                            
                            </p>
                            <p>
                                
                            </p>

                            </Col>
                        </Row>
                        </div>
                        <Row>
                            <Col className="ml-auto mr-auto" md="12">
                                <div className="title text-center">
                                    <Button color="warning">
                                        <a href="http://localhost:3000/masnutrireserve-pageSr">Zakazi termin </a>
                                    </Button>
                                </div>
                            </Col>
                            
                        </Row>
                    </Container>
                </div>
                <DefaultFooter/>
            </div>

       </>
    );
};

export default NutrtionistPage;