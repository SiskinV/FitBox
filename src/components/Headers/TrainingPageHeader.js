import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function TrainingPageHeader() {
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
                        backgroundImage: "url(" + require("assets/img/trainingHead.jpg") + ")"
                    }}
                    ref={pageHeader}
                ></div>
                <div className="content-center">
                    <Container>
                        <h1 className="title">Healthy life healthy spirit</h1>
                        <Row>
                            <Col className="ml-auto mr-auto text-center " md="4">
                                <div>
                                    <blockquote className="blockqoute">
                                        <h2> Working hours :</h2>
                                        <p> Mon-Fri: 00-24h </p>
                                        <p> Sat-Sun: 8-21h</p>
                                    </blockquote>
                                </div>
                            </Col>
                            <Col className="ml-auto mr-auto text-center " md="4">
                                <div>
                                    <h2> Location: </h2>
                                    <h3> Vojvodjanska 32</h3>
                                    <h3> Majke Jevrosime 12</h3>

                                </div>
                            </Col>
                            <Col className="ml-auto mr-auto text-center " md="4">
                                <div>
                                    <h2> Contact: </h2>
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

export default TrainingPageHeader;
