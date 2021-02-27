import React from "react";
import { Grid, Header, Transition } from "semantic-ui-react";

const Description = ({ size, header, content, visible, animation }) => {
  return (
    <Grid style={{ margin: "20px" }}>
      <Grid.Row>
        <Grid.Column textAlign="left">
          <Transition
            visible={visible}
            animation={animation}
            duration={700}
            transitionOnMount={true}
          >
            <Header style={{ fontFamily: "Helvetica" }} size={size}>
              {header}
            </Header>
          </Transition>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column textAlign="left">
          <Transition
            visible={visible}
            animation={animation}
            duration={700}
            transitionOnMount={true}
          >
            <Header.Content as="h4" style={{ fontFamily: "Helvetica"}}>
              {content}
            </Header.Content>
          </Transition>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
export default Description;
