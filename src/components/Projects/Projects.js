import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chateau_mente_et_cristaux from "../../Assets/Projects/chateau_mente_et_cristaux.png";
import rapport_chateau_mente_et_cristaux from "../../Projetcs/Assets/projet_reseau.pdf";
import rapport_labyrainte from "../../Assets/Projetcs/Game Design Document Laby-rainté.pdf";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Mes Projets </strong>
        </h1>
        <p style={{ color: "white" }}>
          Voici quelques projets sur lesquels j'ai travaillé récemment.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chateau_mente_et_cristaux}
              isBlog={false}
              title="Configuration réseau"
              description="L’objectif de ce projet est de configurer un réseau au vue d’un évènement fictif organisé par la Société
              des amis d’Alexandre Dumas au château de Monte Cristo. Nous devons
              nous occuper de la bonne installation des services DHCP, DNS, SSH, Web
              et SSH"
              rapport={rapport_chateau_mente_et_cristaux}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Code game Jam"
              description="Jeu d'horreur 3d fait en 30 heures pendant la code game jam. Le thème était la fête des clics"
              rapport="https://www.youtube.com/watch?v=sICzylhVaq8"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Laby-rainté"
              description="Jeu 2d type battle royal dans un labyrainte"
              rapport={rapport_labyrainte}            
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
