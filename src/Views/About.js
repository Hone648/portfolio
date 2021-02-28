import React from "react";
import { Grid } from "semantic-ui-react";
import FaceCard from "../components/Card";
import Description from "../components/Description";
import Skill from "../components/Skill";
import Pic from "../images/profilePic.jpg";

const About = () => {
  const descriptionHeader = "Who am I?";
  const descriptionContent =
    "I'm a full-stack developer based out of Seattle, WA. I've spent most of my life as an electronics technician working in the aviation, aerospace, semiconductor, DoD, and communications industries. As a field engineer, I have always worked closely with the software team in order to provide the fuctionality that the customer required. Although communications between the field and developer were adequate, there were often miscommunications between what the customer needed and how the developer understood the request. This disconnect could create some not-so-good additions. So began my journey into development. A year and a half later and I'm bringing my own creations to life. My main focus is to write clean, bug free code that is user friendly and intuitive. Feel free to contact me if you'd like to collaborate on one of my projects or if you think I could help you with yours!";

  const leftSkillHeader = "Front-End";
  const middleSkillHeader = "Version Control";
  const rightSkillHeader = "Back-End";

  const textAnimation = "vertical flip";
  const iconColor = "blue";

  return (
    <div>
      <Grid stackable relaxed="very" divided="vertically">
        <Grid.Row style={{ marginTop: "10px" }} stretched={true}>
          <Grid.Column width={5}>
            <FaceCard pic={Pic} />
          </Grid.Column>

          <Grid.Column width={11}>
            <Description
              size="huge"
              header={descriptionHeader}
              content={descriptionContent}
              visible={true}
              animation={"zoom"}
            />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row
          style={{ marginTop: "10px" }}
          columns={3}
          centered={true}
          divided={true}
        >
          <Grid.Column>
            <div>
              <Skill
                icon="globe"
                iconColor={iconColor}
                header={leftSkillHeader}
                animation={textAnimation}
                duration={1000}
              />
            </div>
          </Grid.Column>

          <Grid.Column>
            <div>
              <Skill
                icon="git"
                iconColor={iconColor}
                header={middleSkillHeader}
                animation={textAnimation}
                duration={2000}
              />
            </div>
          </Grid.Column>

          <Grid.Column>
            <div>
              <Skill
                icon="tasks"
                iconColor={iconColor}
                header={rightSkillHeader}
                animation={textAnimation}
                duration={3000}
              />
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Grid columns={1} centered={true} style={{ marginTop: "60px" }}>
        <Grid.Row verticalAlign="bottom">
          <Grid.Column textAlign="center" width={7}>
            <p>
              <i>
                Learning to write clean code is hard work. It requires more than
                just the knowledge of principles and patterns. You must sweat
                over it.
              </i>
            </p>
            <p>
              <b>- Robert C. Martin, Clean Code</b>
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};
export default About;
