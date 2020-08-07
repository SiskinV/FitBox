import React from "react";
import { Link } from 'react-router-dom'
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

const reset = () => {
    document.getElementById('name').value = "";
    document.getElementById('surname').value = "";
    document.getElementById('username').value = "";
    document.getElementById('email').value = "";
    document.getElementById('password').value = "";
}

const registrujSe = (event) => {

    event.preventDefault();

    var users = JSON.parse(localStorage.getItem('users'));
    if (users == null) {
        users = [];
    }

    var moze = 1;

    if (users != null) {
        console.log('usao u if');
        for (var i = 0; i < users.length; i++) {
            console.log(users[i]);
            if (users[i].username == document.getElementById('username').value) {
                moze = 0;
                alert('User already exists');
                reset();
            }
        }
    }

    if (moze == 1) {
        var user = {
            name: document.getElementById('name').value,
            surname: document.getElementById('surname').value,
            username: document.getElementById('username').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            trainings: [{
                name: String,
                done: String,
                comments: {
                    number: String,
                    desc: String,
                },
            }]
        };

        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        alert("Uspesno ste se registrovali");

        var ulogovan = JSON.parse(localStorage.getItem('ulogovan'));
        if (ulogovan == null) {
            ulogovan = {
                username: document.getElementById('username').value,
                password: document.getElementById('password').value
            };
        } else {
            ulogovan.username = document.getElementById('username').value;
            ulogovan.password = document.getElementById('password').value;
        }

        localStorage.setItem('ulogovan', JSON.stringify(ulogovan));
        localStorage.setItem('ulogovanUser', 1);

        window.location.replace("http://localhost:3000/landing-page");
    }

}

function SignupPage() {
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
                                                id="name"
                                                placeholder="Ime..."
                                                type="text"
                                                onFocus={() => setFirstFocus(true)}
                                                onBlur={() => setFirstFocus(false)}
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
                                                id="surname"
                                                placeholder="Prezime..."
                                                type="text"
                                                onFocus={() => setLastFocus(true)}
                                                onBlur={() => setLastFocus(false)}
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
                                                id="username"
                                                placeholder="Username..."
                                                type="text"
                                                onFocus={() => setLastFocus(true)}
                                                onBlur={() => setLastFocus(false)}
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
                                                id="email"
                                                placeholder="Email..."
                                                type="text"
                                                onFocus={() => setLastFocus(true)}
                                                onBlur={() => setLastFocus(false)}
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
                                                id="password"
                                                placeholder="Password..."
                                                type="password"
                                                onFocus={() => setLastFocus(true)}
                                                onBlur={() => setLastFocus(false)}
                                            ></Input>
                                        </InputGroup>
                                    </CardBody>
                                    <CardFooter className="text-center">
                                        <Button
                                            block
                                            className="btn-round"
                                            color="info"
                                            href="#pablo"
                                            onClick={e => registrujSe(e)}
                                            size="lg"
                                        >
                                            Registruj se
                                        </Button>

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

export default SignupPage;
