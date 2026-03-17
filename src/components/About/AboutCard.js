import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour! Je suis <span className="purple">Damien Braconnier</span>{" "}
            sur <span className="purple">Gif-sur-Yvette, France</span>.
            <br />
            Je suis actuelement {" "}
            <span className="purple">en 2ème année BUT informatique</span> à l'{" "}
            <span className="purple">IUT d'Orsay</span>.
            <br />J'ai passé un bac STI2D spécialité{" "}
            <span className="purple">systèmes d'information et numérique</span> à{" "}
            <span className="purple">Corbeil-Essonne</span>.
            <br />
            <br />
            A part l'informatique, j'aime beaucoup les activités qui me font bouger ou réfléchir
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Jeux vidéos 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Escalade ⛰
            </li>
            <li className="about-activity">
              <ImPointRight /> Physique ⚛️
            </li>
          </ul>
          <footer></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
