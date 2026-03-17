import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LAISSER MOI ME <span className="purple"> PRÉSENTER </span>
            </h1>
            <p className="home-about-body">
              Je suis un étudiant en informatique qui adore résoudre des problèmes.
              <br />
              <br />
              Je maîtrise
              <i>
                <b className="purple">
                  {" "}
                  Java, C++, PHP, SQL, and JavaScript{" "}
                </b>
              </i>
              — Je peux travailler et en front-end et en back-end
              <br />
              <br />
              Ce que je préfère est
              <i>
                <b className="purple">
                  {" "}
                  Applications, jeux vidéos, Logique interne,{" "}
                </b>
              </i>
              et le networking entre applications.
              <br />
              <br />
              Dès que possible, je préfère utiliser
              <b className="purple"> Kotlin </b> à la place de <b className="purple"> Java </b>
              pour un code plus
	      <i>
                <b className="purple"> Clair</b> et moins
                <b className="purple"> Verbeux</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
