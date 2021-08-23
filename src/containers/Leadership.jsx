import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { leadership } from "../portfolio";
import LeadershipCard from "../components/LeadershipCard";
import { Container, Col, Row } from "reactstrap";
import { Fade } from "react-reveal";

import code from "../assets/lottie/interests.json";
import GreetingLottie from "../components/DisplayLottie";

const Leadership = (data) => {
  return (
    <section className=" bg-gradient-info section section-lg">
      <Fade bottom duration={1000} distance="40px">
        <div className="d-flex p-4">
          <div className="pl-7">
            <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
              <i className="ni ni-favourite-28 text-info" />
            </div>
          </div>
          <div className="pl-4">
            <h4 className="display-3 text-info">Leadership</h4>
          </div>
        </div>
        <Row>
          <Col lg="12">
            <VerticalTimeline>
              {leadership.map((data, i) => {
                return <LeadershipCard key={i} data={data} />;
              })}
            </VerticalTimeline>
          </Col>
        </Row>
      </Fade>
    </section>
  );
};

export default Leadership;
