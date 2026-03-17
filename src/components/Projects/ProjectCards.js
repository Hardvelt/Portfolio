import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {

  const handleRapportClick = () => {
    if (props.rapport) {
      const link = document.createElement("a");
      link.href = props.rapport; // URL du rapport
      document.body.appendChild(link);
      alert(link)
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* Bouton GitHub / Blog / Rapport */}
        <Button
          variant="primary"
          href={!props.rapport ? props.ghLink : undefined} // href si pas rapport
          onClick={props.rapport ? handleRapportClick : undefined} // listener si rapport
          target="_blank"
        >
          {props.rapport
            ? "Rapport"
            : props.isBlog
            ? "Blog"
            : (<><BsGithub /> GitHub</>)}
        </Button>

        {"\n\n"}

        {/* Bouton Demo si applicable */}
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;{"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
