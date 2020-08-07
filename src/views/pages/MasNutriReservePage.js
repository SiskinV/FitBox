import React from "react";
import { useState } from 'react';
import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    PDFDownloadLink,
} from "@react-pdf/renderer";


// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Col
} from "reactstrap";

// core components
import TransparentFooter from "components/Footers/TransparentFooter.js";
import IndexNavbar from "components/Navbars/IndexNavbar";

const styles = StyleSheet.create({
    page: {
        flexDirection: "row",
        backgroundColor: "#E4E4E4",
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
});



function MasNutriReservePage() {

    const [state, setState] = useState({
        name: "",
        surname: "",
        contact: "",
        email: "",
        date: "",
        type: "",
        desc: "",
    })

    const [firstFocus, setFirstFocus] = React.useState(false);
    const [lastFocus, setLastFocus] = React.useState(false);
    React.useEffect(() => {
        document.body.classList.add("login-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove("login-page");
            document.body.classList.remove("sidebar-collapse");
        };
    });

    const myDocument = (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section} style={{ marginTop: "20px" }}>
                    <View style={{ textAlign: "center" }}>
                        <Text>Zakazivanje Nutricioniste</Text>
                    </View>

                    <View style={styles.section}>
                        <Text>
                            Ime i Prezime: {state.name} {state.surname}
                        </Text>
                        <Text>Type:{state.type}</Text>
                        <Text>Contact:{state.contact}</Text>
                        <Text>Email:{state.email} </Text>
                        <Text>Datum: {state.date}</Text>
                        <Text>Opis problema: {state.desc}</Text>
                    </View>
                </View>
            </Page>
        </Document>
    );

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setState({ ...state, [name]: value });
    };

    return (
        <>
            <IndexNavbar />
            <div className="page-header clear-filter" filter-color="blue">
                <div
                    className="page-header-image"
                    style={{
                        backgroundImage: "url(" + require("assets/img/login.jpg") + ")"
                    }}
                ></div>
                <div className="content">
                    <Container>
                        <Col className="ml-auto mr-auto" md="4">
                            <Card className="card-login card-plain">
                                <Form action="" className="form" method="">
                                    <CardHeader className="text-center">
                                        <div className="logo-container">
                                        </div>
                                    </CardHeader>
                                    <CardBody>
                                        <InputGroup
                                            className={
                                                "no-border input-lg" +
                                                (firstFocus ? " input-group-focus" : "")
                                            }
                                        >
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="now-ui-icons users_circle-08"></i>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                name="name"
                                                value={state.name}
                                                placeholder="Ime..."
                                                type="text"
                                                onFocus={() => setFirstFocus(true)}
                                                onBlur={() => setFirstFocus(false)}
                                                onChange={handleOnChange}
                                            ></Input>
                                        </InputGroup>
                                        <InputGroup
                                            className={
                                                "no-border input-lg" +
                                                (lastFocus ? " input-group-focus" : "")
                                            }
                                        >
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="now-ui-icons users_circle-08"></i>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                name="surname"
                                                value={state.surname}
                                                placeholder="Prezime..."
                                                type="text"
                                                onFocus={() => setLastFocus(true)}
                                                onBlur={() => setLastFocus(false)}
                                                onChange={handleOnChange}
                                            ></Input>
                                        </InputGroup>
                                        <InputGroup
                                            className={
                                                "no-border input-lg" +
                                                (lastFocus ? " input-group-focus" : "")
                                            }
                                        >
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="now-ui-icons users_circle-08"></i>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                name="contact"
                                                value={state.contact}
                                                placeholder="Kontakt..."
                                                type="text"
                                                onFocus={() => setLastFocus(true)}
                                                onBlur={() => setLastFocus(false)}
                                                onChange={handleOnChange}
                                            ></Input>
                                        </InputGroup>
                                        <InputGroup
                                            className={
                                                "no-border input-lg" +
                                                (lastFocus ? " input-group-focus" : "")
                                            }
                                        >
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="now-ui-icons ui-1_email-85"></i>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                name="email"
                                                value={state.email}
                                                placeholder="Email..."
                                                type="text"
                                                onFocus={() => setLastFocus(true)}
                                                onBlur={() => setLastFocus(false)}
                                                onChange={handleOnChange}
                                            ></Input>
                                        </InputGroup>
                                        <InputGroup
                                            className={
                                                "no-border input-lg" +
                                                (lastFocus ? " input-group-focus" : "")
                                            }
                                        >
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="now-ui-icons ui-1_calendar-60"></i>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                name="date"
                                                value={state.date}
                                                placeholder="Datum..."
                                                type="text"
                                                onFocus={() => setLastFocus(true)}
                                                onBlur={() => setLastFocus(false)}
                                                onChange={handleOnChange}
                                            ></Input>
                                        </InputGroup>
                                        <InputGroup
                                            className={
                                                "no-border input-lg" +
                                                (lastFocus ? " input-group-focus" : "")
                                            }
                                        >
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="now-ui-icons text_caps-small"></i>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                name="desc"
                                                value={state.desc}
                                                placeholder="Opis..."
                                                type="text"
                                                onFocus={() => setLastFocus(true)}
                                                onBlur={() => setLastFocus(false)}
                                                onChange={handleOnChange}
                                            ></Input>
                                        </InputGroup>
                                        <InputGroup
                                            className={
                                                "no-border input-lg" +
                                                (lastFocus ? " input-group-focus" : "")
                                            }
                                        >
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="now-ui-icons text_caps-small"></i>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                name="type"
                                                value={state.type}
                                                placeholder="Tip..."
                                                type="text"
                                                onFocus={() => setLastFocus(true)}
                                                onBlur={() => setLastFocus(false)}
                                                onChange={handleOnChange}
                                            ></Input>
                                        </InputGroup>
                                    </CardBody>

                                    <CardFooter className="text-center">
                                        {state.name &&
                                            state.email &&
                                            state.contact &&
                                            state.date &&
                                            state.type &&
                                            state.surname &&
                                            state.desc ? (
                                                <a
                                                    onClick={() =>
                                                        setState({
                                                            name: "",
                                                            surname: "",
                                                            contact: "",
                                                            email: "",
                                                            date: "",
                                                            type: "",
                                                            desc: "",
                                                        })
                                                    }
                                                >
                                                    <PDFDownloadLink
                                                        document={myDocument}
                                                        fileName="nutricionista.pdf"
                                                    >
                                                        {({ blob, url, loading, error }) => {
                                                            return loading ? "Ucitava se dokument..." : "Rezervisi!";
                                                        }}
                                                    </PDFDownloadLink>
                                                </a>
                                            ) : null}
                                    </CardFooter>
                                </Form>
                            </Card>
                        </Col>
                    </Container>
                </div>
                <TransparentFooter />
            </div>
        </>
    );
}



export default MasNutriReservePage;
