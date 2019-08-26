import React from "react";
import { connect } from "react-redux";

import SidebarTemplate from "../templates/SidebarTemplate";
import SingleTopic from "../components/organism/SingleTopic";
import TopicSection from "../components/organism/TopicSection";
import LastOpenTopic from "../components/organism/LastOpenTopic";

const Topics = ({ sections }) => {
  return (
    <SidebarTemplate>
      <LastOpenTopic />
      {sections.map(({ title, topics }) => (
        <TopicSection title={title} amount={topics.length} key={title}>
          {topics.map(({ title, id, color, img, progress }, index) => (
            <SingleTopic
              index={index}
              key={id}
              title={title}
              color={color}
              img={img}
              progress={progress}
              destination={id}
            />
          ))}
        </TopicSection>
      ))}
    </SidebarTemplate>
  );
};

const mapStateToProps = ({ sections }) => {
  return { sections };
};

export default connect(mapStateToProps)(Topics);
