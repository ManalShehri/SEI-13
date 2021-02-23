import React from "react";
import { Jumbotron, Container, Card, Row, Col } from "react-bootstrap";

export default function MealCard(props) {
  return (
    <section>
      <section className="main-intro">
        <Jumbotron fluid>
          <Container className="jumbotron-info">
            <br />
            <br />
            <br />
            <br />
            <h1>Explore your tastes</h1>
            <p>
              Enjoy many recipes from around the world and learn how to make
              them.
            </p>
          </Container>
        </Jumbotron>
      </section>

      <section>
        <Container>
          <Card>
            <Card.Title>
              <h3>{props.meal.strMeal}</h3>
            </Card.Title>
            <Row>
              <Col lg={true} className="card-image">
                <img
                  alt="Receipe Thumbnail"
                  style={{ marginTop: "50px", marginBottom: "50px" }}
                  src={props.meal.strMealThumb}
                />
              </Col>
              <Col lg={true}>
                <p>{props.meal.strInstructions}</p>
              </Col>
            </Row>
          </Card>
        </Container>
      </section>
    </section>
  );
}
