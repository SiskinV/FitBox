import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function MassagePageHeader() {
    let pageHeader = React.createRef();

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
            <div className="page-header page-header-small">
                <div
                    className="page-header-image"
                    style={{
                        backgroundImage: "url(" + require("assets/img/MassagePageHeader4.jpg") + ")"
                    }}
                    ref={pageHeader}
                ></div>
                <div className="content-center">
                    <Container>
                        <h1 className="title">Najbolje masaze u gradu</h1>
                        <Row>
                            <Col className="ml-auto mr-auto text-center " md="4">
                                <div>
                                    <blockquote className="blockqoute">
                                        <h2> Radno vreme :</h2>
                                        <p> Pon-Pet: 00-24h </p>
                                        <p> Sub-Ned: 8-21h</p>
                                    </blockquote>
                                </div>
                            </Col>
                            <Col className="ml-auto mr-auto text-center " md="4">
                                <div>
                                    <h2> Lokacija: </h2>
                                    <h3> Vojvodjanska 32</h3>
                                    <h3> Majke Jevrosime 12</h3>

                                </div>
                            </Col>
                            <Col className="ml-auto mr-auto text-center " md="4">
                                <div>
                                    <h2> Kontakt: </h2>
                                    <h3> +381631894231</h3>
                                    <h3> +381621234567</h3>

                                </div>
                            </Col>


                        </Row>

                    </Container>
                </div>
            </div>
        </>
    );
}

export default MassagePageHeader;
