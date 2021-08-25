import React from "react";

import { Card, Col, Row, Container } from "reactstrap";
import SocialLinks from "../components/SocialLinks";

const GithubProfileCard = ({ prof }) => {
  return (
    <Card className="section-lg bg-gradient-info shadow-lg border-0">
      <Container className="">
        <div className="p-2">
          <Row className="">
            <Col className="order-lg-2" lg="4">
              <img
                src={prof.avatar_url}
                style={{ width: "200px" }}
                alt=""
                className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
              />
            </Col>
            <Col lg="8" className="order-lg-1">
              <h2 className="text-white">Reach Out to me!</h2>
              <p className="lead text-white mt-3">
                DISCUSS A PROJECT OR WANT TO GRAB A COFFEE (VIRTUALLY OR COVID
                SAFE)? SEND ME A MESSAGE!
              </p>
              <p className="text-white mt-3">
                Rising sophomore at Rutgers Honors College majoring in Computer
                Science and minoring in Economics. I'm always eager for new
                experiences in research, community service, or programming
                projects! Currently looking for internships for Summer 2022.
                Feel free to chat me using my socials below or email me at
                kgs87@scarletmail.rutgers.edu:)
              </p>

              <SocialLinks />
            </Col>
          </Row>
        </div>
      </Container>
    </Card>
  );
};

export default GithubProfileCard;
