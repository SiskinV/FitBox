import React from 'react';
import IndexNavbar from 'components/Navbars/IndexNavbar';
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import NutritionistHeader from 'components/Headers/NutritionistHeader';

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
            <IndexNavbar />
            <div className="wrapper">
                <NutritionistHeader />
                <div className="section section-about-us">
                    <Container>
                    <Row>
                        <Col className="ml-auto mr-auto text-center" md="8">
                            <h2 className="title">Training vs Nutrition?</h2>
                            <h5 className="description">
                            They do not say for free that training is 30% and nutrition is 70%. Training without a healthy diet has almost no effect.
                                 Training and nutrition are related to each other and I can't do without each other. Whether you want to or not
                                 to lose fat or gain muscle nutrition is a very important factor.

                                 TEXT TEXT TEXT
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
                            What makes us so special?
                            </h3>
                            <p>
                            Mr. Cheno divides people into 5 types, depending on psychological and health problems. Remember -
                                        there are no universal nutrition tips for everyone. There are simply frameworks around which your individual diet is built, writes Stil.kurir.rs
                                        At the foot of the Italian Alps is the village of Merano. You can often hear about him on television,
                                         because celebrities occupied this village. Why? Because the best nutritionist in the world, Henri Chenault, works in the village ambulance in Merano!
                                        In his clinic, people learn to eat properly and in general, how to behave in the new time.
                                        Mr. Cheno is considered a specialist in healthy eating, and he has written many books about it.

                                         

                                        Today we are talking about what Sheno considers a healthy diet. We were surprised because there are many
                                        things he says contrary to new trends in weight loss. But when you look at the happy and healthy faces of patients,
                                        you realize that the nutritionist is right about many things. Many of his patients eventually became his friends, including
                                        Princess of Monaco.
                                        
                            </p>
                            <p>
                                
                            Cheno claims: "Coffee is not the best start to the day. And it doesn't matter if it is black or with milk.
                                        Interesting fact: If someone drank coffee with milk today and died the next day.
                                        An autopsy reveals undigested coffee with milk in his stomach!
                                        That is why it is best to drink green tea in the morning, and at most 1 cup of espresso during the day!
                                        After all, coffee should be strong and most importantly - it should be short! "
                                        Nutritionists agree that the stomach should not be burdened in the morning.
                                        It is important that the stomach works lightly, and not to overload it for the whole day.
                                        "I have fruit for breakfast. I start lunch with a salad, and then I take charcoal
                                        hydrates: rice or pasta. I eat vegetable soup in the evening.
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
                                        <a href="http://localhost:3000/masnutrireserve-page">Make an appointment </a>
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