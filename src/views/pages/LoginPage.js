import React from "react";
import { Redirect } from 'react-router-dom'
import {Link} from 'react-router-dom'
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
import IndexNavbar from "components/Navbars/IndexNavbar";
let userN='';
let pass='';
// const updateInputValue=(e)=>{
//   e.preventDefault();
//   userN=e.target.value;
// }
const updateInputValue=(e)=>{
  userN=e.target.value;

}
const updateInputValueP=(e)=>{
  pass=e.target.value;
}
// const updateInputValue = input => e => {
//    [input]= e.target.value ;
// };
const ulogujSe=(event)=>{
  
  event.preventDefault();
  console.log("dugmestisnuo "+userN+' '+pass );
  localStorage.setItem('username',userN);
  localStorage.setItem('password',pass);
  userN ='';
  pass='';
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
                        id="username"
                        placeholder="Username..."
                        type="text"
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                       // value={userN}
                        onChange={e=>updateInputValue(e)}
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
                        placeholder="Password..."
                        type="password"
                        onFocus={() => setLastFocus(true)}
                        onBlur={() => setLastFocus(false)}
                        onChange={e=>updateInputValueP(e)}
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
                      <Link to="http://localhost:3000/landing-page">Uloguj se</Link>
                      
                    
                    </Button>
                    <div className="pull-left">
                      <h6>
                        <a
                          href="http://localhost:3000/signup-page"
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
                          Help?
                        </a>
                      </h6>
                      <Button onClick={() => { alert(document.getElementById("username").value) }}>
                        klikni me
                      </Button>
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
