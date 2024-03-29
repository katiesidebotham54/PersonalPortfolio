import React, { Fragment } from "react";

import { Fade } from "react-reveal";
import DisplayLottie from "../components/DisplayLottie";
import skills from "../assets/lottie/skills.json";

import { Container, Row, Col, UncontrolledTooltip } from "reactstrap";

import { skillsSection } from "../portfolio";

const Skills = () => {
  return (
    <Fade left duration={1000} distance="40px">
      <Container className="text-center my-5 section section-lg">
        <h1 className="h1">{skillsSection.title}</h1>
        <p className="lead">{skillsSection.subTitle}</p>
        <Row>
          <Col lg="6">
            <DisplayLottie animationData={skills} />
          </Col>
          <Col lg="6">
            <div className="d-flex justify-content-center flex-wrap mb-5">
              {skillsSection.softwareSkills.map((skill) => {
                return (
                  <Fragment key={skill.skillName}>
                    <div
                      className="icon icon-lg icon-shape shadow rounded-circle mb-5"
                      id={skill.skillName}
                    >
                    </div>
                    <UncontrolledTooltip
                      delay={0}
                      placement="bottom"
                      target={skill.skillName}
                    >
                      {skill.skillName}
                    </UncontrolledTooltip>
                  </Fragment>
                );
                z;
              })}
            </div>
            <div>
              {skillsSection.skills.map((skill) => {
                return <p key={skill}>{skill}</p>;
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </Fade>
  );
};

export default Skills;
