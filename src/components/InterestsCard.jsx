import React from "react";

import { Card, CardBody, Row, Button } from "reactstrap";

import { Fade } from "react-reveal";

const InterestsCard = ({ data }) => {
  return (
    <Row className="row-grid align-items-center">
      <Fade bottom duration={1000} distance="40px">
        <Card className="shadow-lg--hover shadow">
          <CardBody>
            <div className="d-flex px-3">
              <div className="pl-4">
                <div className="d-flex">
                  <div>
                    <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                      <i className={data.icon} />
                    </div>
                  </div>
                  <div className="pl-4">
                    <h3>{data.name}</h3>
                  </div>
                </div>
                <p className="description mt-3">{data.desc}</p>
                {data.link ? (
                  <Button
                    className="btn-icon"
                    color="success"
                    href={data.link}
                    target="_blank"
                  >
                    <span className="btn-inner--icon">
                      <i className="fa fa-arrow-right mr-2" />
                    </span>
                    <span className="nav-link-inner--text ml-1">Demo</span>
                  </Button>
                ) : null}
              </div>
            </div>
          </CardBody>
        </Card>
      </Fade>
    </Row>
  );
};

export default InterestsCard;
