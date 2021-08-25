import React from "react";
import { interests, ambition } from "../portfolio";
import { Container, Col, Button, Row } from "reactstrap";
import InterestsCard from "../components/InterestsCard";
import { Fade } from "react-reveal";
import code from "../assets/lottie/interests.json";
import InterestLottie from "../components/DisplayLottie";
import "../mainStyles.css";
const Interests = () => {
  return (
    <section className="section">
      <Container>
        <Fade bottom duration={1000} distance="40px">
          <div className="d-flex p-4">
            <div>
              <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                <i className="ni ni-favourite-28 text-info" />
              </div>
            </div>
            <div className="pl-4">
              <h4 className="display-3 text-info">My Interests</h4>
            </div>
          </div>
          <Row>
            <Col lg="7" className="interest-card">
              {interests.map((data, i) => {
                return <InterestsCard key={i} data={data} />;
              })}
            </Col>
            <Col lg="5">
              <h1 className="display-3">My Ambitions</h1>
              <p className="lead">{ambition}</p>
              <div className="interestLottie">
                <InterestLottie animationData={code} />
              </div>
            </Col>
          </Row>
        </Fade>
      </Container>
      <div className="separator separator-bottom separator-skew zindex-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon className="fill-white" points="2560 0 2560 100 0 100" />
        </svg>
      </div>
    </section>
  );
};

export default Interests;
