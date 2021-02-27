import React from "react";
import { Grid } from "semantic-ui-react";
import FaceCard from "../components/FaceCard";
import Description from "../components/Description";
import Skill from "../components/Skill";
import Pic from "../images/profilePic.jpg";

const About = () => {
  const descriptionHeader = "Who am I?";
  const descriptionContent =
    "I'm a full-stack developer based out of Seattle, WA. I've spent most of my life as an electronics technician working in the Aviation, Aerospace, Semiconductor, DoD, and Communications industries. As a field engineer I always worked closely with the software team in order to provide the fuctionality that the customer required. Although communication between the field and developer was good, there were often miscommunications between what the customer needed and how the developer understood the request. This disconnect could create some not-so-good additions. There was a need. A need that I could fill IF I could program! I picked up some programming here and there, but the day came that I decided it was time to take the plunge and fully immerse myself into development. It's been a great ride! My main goal is to use the troubleshooting experience gained as a field engineer to produce applications that are bug free, user friendly, and intuitive.";

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

      <Grid columns={1} centered={true} style={{ marginTop: "20px" }}>
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
