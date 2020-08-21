import React from "react";
import { Redirect } from 'react-router-dom'
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
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import TransparentFooter from "components/Footers/TransparentFooter.js";
import IndexNavbarSr from "components/Navbars/IndexNavbarSr.js";

// const updateInputValue=(e)=>{
//   e.preventDefault();
//   userN=e.target.value;
// }

//NEPOTREBNO 
/*
const updateInputValue = (e) => {
  userN = e.target.value;

}
const updateInputValueP = (e) => {
  pass = e.target.value;
}
*/
// const updateInputValue = input => e => {
//    [input]= e.target.value ;
// };
const ulogujSe = (event) => {

    event.preventDefault();
    //console.log("dugmestisnuo " + userN + ' ' + pass);

    var users = [];
    users = JSON.parse(localStorage.getItem('users'));

    var name = document.getElementById("username").value;
    var pass = document.getElementById("password").value
    var uspesanLog = 0;

    for (var i = 0; i < users.length; i++) {
        if (users[i].username == name) {
            if (users[i].password == pass) {
                uspesanLog = 1;
            }
        }
    }

    if (uspesanLog) {
        var ulogovan = JSON.parse(localStorage.getItem('ulogovan'));
        if (ulogovan == null) {
            ulogovan = {
                username: document.getElementById("username").value,
                password: document.getElementById("password").value
            };
        } else {
            ulogovan.username = document.getElementById('username').value;
            ulogovan.password = document.getElementById('password').value;
        }

        localStorage.setItem('ulogovan', JSON.stringify(ulogovan));
        alert("Uspesno ulogovan user");
        localStorage.setItem('ulogovanUser', 1);
        window.location.replace("http://localhost:3000/landing-pageSr");
    } else {
        alert('Wrong username or password, please try again');
        //Window.location = "http://localhost:3000/login-page";
        document.getElementById('username').value = "";
        document.getElementById('password').value = "";
    }



    //localStorage.setItem('username', document.getElementById("username").value);
    //localStorage.setItem('password', document.getElementById("password").value);

    // userN = '';
    // pass = '';
    // {return(<Redirect to="http://localhost:3000/landing-page" />)}
    // {return(<Redirect to='/landing-page' />);};
}
const LoginPage = () => {
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
            <IndexNavbarSr />
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
                                                id="username"
                                                placeholder="Ime..."
                                                type="text"
                                                onFocus={() => setFirstFocus(true)}
                                                onBlur={() => setFirstFocus(false)}
                                                onChange={e => e.preventDefault()}
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
                                                id='password'
                                                placeholder="Sifra..."
                                                type="password"
                                                onFocus={() => setLastFocus(true)}
                                                onBlur={() => setLastFocus(false)}
                                                onChange={e => e.preventDefault()}
                                            ></Input>
                                        </InputGroup>
                                    </CardBody>
                                    <CardFooter className="text-center">
                                        <Button
                                            block
                                            className="btn-round"
                                            color="info"
                                            href="#pablo"
                                            onClick={e => ulogujSe(e)}
                                            size="lg"

                                        >
                                            Uloguj se


                    </Button>
                                        <div className="pull-left">
                                            <h6>
                                                <a
                                                    href="http://localhost:3000/signup-pageSr"
                                                >
                                                    Registruj se
                        </a>
                                            </h6>
                                        </div>
                                        <div className="pull-right">
                                            <h6>
                                                <a

                                                    href="#pablo"
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    Pomoc?
                        </a>
                                            </h6>

                                        </div>
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

export default LoginPage;
