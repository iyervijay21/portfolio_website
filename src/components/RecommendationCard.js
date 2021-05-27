import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
function RecommendationCard(props) {
  const { name, designation, company, message } = props.recommendation;
  let newmessage;
  if (message.length > 25) {
    newmessage = message.slice(0, 25) + "...";
  } else {
    newmessage = message;
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="col-12 col-md-4 btn btn-outline-none mx-auto">
        <div className="card shadow h-100">
          <a variant="primary" onClick={handleShow}>
            <div className="card-body">
              <h4 className="card-text">{newmessage}</h4>
              <p className="card-text text-secondary mb-0">{name}</p>
              <p className="card-text text-secondary">
                {designation} at {company}
              </p>
            </div>
          </a>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ textAlign: "center" }}>{message}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ textAlign: "center" }}>
          {name}
          <br />
          {designation} at {company}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RecommendationCard;
