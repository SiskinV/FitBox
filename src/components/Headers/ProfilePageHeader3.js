import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function ProfilePageHeader3() {
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
            <div
                className="page-header clear-filter page-header-small"
                filter-color="blue"
            >
                <div
                    className="page-header-image"
                    style={{
                        backgroundImage: "url(" + require("assets/img/bg5.jpg") + ")"
                    }}
                    ref={pageHeader}
                ></div>
                <Container>
                    <div className="photo-container">
                        <img alt="..." src={require("assets/img/PersonalTrener2.jpg")}></img>
                    </div>
                    <h3 className="title">Janko Pusic</h3>
                    <p className="category">Trener</p>
                    <div className="content">
                        <div className="social-description">
                            <h2>22</h2>
                            <p>Godine</p>
                        </div>
                        <div className="social-description">
                            <h2>4.3</h2>
                            <p>Ocena</p>
                        </div>
                        <div className="social-description">
                            <h2>95e</h2>
                            <p>Cena</p>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default ProfilePageHeader3;
