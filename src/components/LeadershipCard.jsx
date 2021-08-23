import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const LeadershipCard = ({ data }) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--data"
      date={data.duration}
      iconStyle={{
        background: "#6b89c1",
        color: "#fff",
        textAlign: "center",
      }}
      icon={<i className={data.icon}></i>}
    >
      <h4
        className="vertical-timeline-element-title"
        style={{ textAlign: "left" }}
      >
        {data.name}
      </h4>
      <h5
        className="vertical-timeline-element-subtitle"
        style={{ textAlign: "left" }}
      >
        {data.company}
      </h5>
      <ul>
        {data.descBullets
          ? data.descBullets.map((desc) => {
              return <li key={desc}>{desc}</li>;
            })
          : null}
      </ul>
    </VerticalTimelineElement>
  );
};

export default LeadershipCard;
