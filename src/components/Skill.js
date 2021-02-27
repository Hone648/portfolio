import React from "react";
import { Grid, Header, Icon, Transition } from "semantic-ui-react";

const Skill = ({ icon, iconColor, header, content, animation, duration }) => {
  return (
    <Grid>
      <Grid.Row>
          <Grid.Column>
            <Header as="h2" icon textAlign="center">
            <Transition
                animation={animation}
                duration={duration}
                transitionOnMount={true}
              >
              <Icon color={iconColor} name={icon} circular />
              </Transition>
              <Transition
                animation={animation}
                duration={duration}
                transitionOnMount={true}
              >
                <Header.Content style={{ fontFamily: "Helvetica" }}>
                  {header}
                </Header.Content>
              </Transition>
            </Header>
            <Transition
              animation={animation}
              duration={duration}
              transitionOnMount={true}
            >
              <span style={{ textAlign: "center", fontFamily: "Helvetica" }}>{content}</span>
            </Transition>
          </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
export default Skill;
