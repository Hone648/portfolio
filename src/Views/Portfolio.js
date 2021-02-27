import React from "react";
import { Header, Image, Grid, Segment } from "semantic-ui-react";
import ECommerceIcon from "../images/eCommerce.png";
import CSharpIcon from "../images/cSharpIcon.png";
import SqlIcon from "../images/sql.png";
import TopSplash from "../images/Truckette/topSplash.png";
import MiddleSplash from "../images/Truckette/middleSplash.png";
import SignIn from "../images/Truckette/signIn.png";
import Products from "../images/Truckette/productSplash.png";

const Portfolio = () => {
  const images = [TopSplash, MiddleSplash, SignIn, Products];
  const renderedImages = images.map((image) => {
    return (
      <Segment padded>
        <Grid.Row
          style={{ marginTop: "20px" }}
          columns={3}
          textAlign="center"
          divided={true}
          centered={true}
        >
          <Grid.Column>
            <Image src={image} />
          </Grid.Column>
        </Grid.Row>
      </Segment>
    );
  });

  return (
    <Grid columns={2} stackable>
      <Grid.Row textAlign="center" columns={5}>
        <Header as="h3">
          <Image src={ECommerceIcon} />
          Truckette Hat Co.
        </Header>
      </Grid.Row>

      <Grid.Column verticalAlign="bottom" width={5}>
        <Image src="https://i.imgur.com/7xSYTJR.png" />
      </Grid.Column>

      <Grid centered={true} columns={16} verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={4}>
            <Image src={CSharpIcon} />
          </Grid.Column>
          <Grid.Column width={12} textAlign="left" verticalAlign="middle">
            <Header as="h3">Microsoft C# / .NET Framework</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={4}>
            <Image src={SqlIcon} />
          </Grid.Column>
          <Grid.Column width={12} textAlign="left" verticalAlign="middle">
            <Header as="h3">Microsoft SQL</Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Grid centered={true}>
        <Grid.Row className="description">
          <Grid.Column textAlign="center">
            <p style={{ fontSize: "2em", fontFamily: "Helvetica" }}>
              I'm proud to be working with the creator of Truckette Hats.
              Although still in development, this site provides an easy access
              portal to all of the latest products in the impressive Truckette
              line-up, easy point-of-sale transactions, and an administrator
              portal that allows the user to access current stock, add new
              products, and modify existing items.
            </p>
          </Grid.Column>
        </Grid.Row>
        {renderedImages}
      </Grid>
    </Grid>
  );
};
export default Portfolio;
