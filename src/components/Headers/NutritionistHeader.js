import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

const NutritionistHeader = () => {
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
                        backgroundImage: "url(" + require("assets/img/zdravaHrana/zdravaHrana3.jpg") + ")"
                    }}
                    ref={pageHeader}
                ></div>
                <div className="content-center">
                    <Container>
                        <h1 className="title">Zakazite svoj pregled kod nasih nutricionista.</h1>
                        <Row>
                            <Col className="ml-auto mr-auto text-center " md="6">
                                <div>
                                    <blockquote className="blockqoute">
                                        <h2> Radno vreme :</h2>
                                        <h5> Pon-Pet: 00-24h </h5>
                                        <h5> Sub-Ned: 8-21h</h5>
                                    </blockquote>
                                </div>
                            </Col>
                            <Col className="ml-auto mr-auto text-center " md="6">
                                <div>
                                    <h2> Kontakt: </h2>
                                    <h3> +38169321546</h3>
                                    <h3> +38164613524</h3>

                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default NutritionistHeader;
