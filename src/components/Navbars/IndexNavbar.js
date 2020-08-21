import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";
var jezik=true;
function prevod(){
  jezik=JSON.parse(localStorage.getItem('Jezik'));
  window.location.reload(false);
  return jezik;
 
}
function promeniJezik(e){
  e.preventDefault();
  console.log(jezik);
  jezik=!jezik;
  console.log(jezik);
  localStorage.setItem('Jezik', jezik);
  
}
function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);

  const [lan, setLan] = React.useState(localStorage.getItem("lan"));

  function postavi(a) {
    if (localStorage.getItem("lan") == null) {
      setLan(a);
      localStorage.setItem("lan", a);
    } else {
      setLan(a);
      localStorage.setItem("lan", a);

    }
    if (a == true) {
      window.location.href = "http://localhost:3000/landing-pageSr"
    }
    //console.log(lan);
  }

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              href=""
              target="_blank"
              id="navbar-brand"
              onClick={e => e.preventDefault()}
            >
              <i className="now-ui-icons sport_user-run mr1"></i>
              {"  "}<p>FitBox</p>
            </NavbarBrand>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink
                  to='/landing-page'
                  tag={Link}
                >
                  <i className="now-ui-icons objects_globe"></i>
                  <p>Landing</p>

                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  <i className="now-ui-icons design_bullet-list-67 mr-1"></i>
                  <p>Services</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to="/training-page" tag={Link}>
                    <i className="now-ui-icons sport_user-run mr-1"></i>
                    Trainings
                  </DropdownItem>
                  <DropdownItem to="/massage-page" tag={Link}>
                    <i className="now-ui-icons loader_refresh mr-1"></i>
                    Masage
                  </DropdownItem>
                  <DropdownItem to="/nutritionist-page" tag={Link}>
                    <i className="now-ui-icons files_paper mr-1"></i>
                    Nutritionist
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <Button
                  className="nav-link btn-neutral"
                  color="info"
                  href="#pablo"
                  id="upgrade-to-pro"
                  onClick={e => e.preventDefault()}
                >
                  <i className="now-ui-icons ui-1_calendar-60 mr-1"></i>
                  <p>Schedule training</p>
                </Button>
                <UncontrolledTooltip target="#upgrade-to-pro">
                  Cooming soon!
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  to='/profile-page1'
                  tag={Link}
                >
                  <i className="now-ui-icons users_single-02 mr-1" />
                  <p>Profile</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to='/login-page'
                  tag={Link}
                >
                  <i className="now-ui-icons business_badge mr-1" />
                  <p>Log in</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://twitter.com/CreativeTim?ref=creativetim"
                  target="_blank"
                  id="twitter-tooltip"
                >
                  <i className="fab fa-twitter"></i>

                  <p p className="d-lg-none d-xl-none">Twitter</p>


                </NavLink>
                <UncontrolledTooltip target="#twitter-tooltip">
                  Follow us on Twitter
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.facebook.com/CreativeTim?ref=creativetim"
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-facebook-square"></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Like us on Facebook
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
                  target="_blank"
                  id="instagram-tooltip"
                >
                  <i className="fab fa-instagram"></i>
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Follow us on Instagram
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  onClick={e => { e.preventDefault(); }}
                >
                  <p>eng</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <p>/</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  onClick={e => { e.preventDefault(); postavi(true); }}
                >
                  <p>srb</p>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
