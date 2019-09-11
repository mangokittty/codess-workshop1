import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import ModalForm, { FormState } from "./ModalForm";

const MyModal: React.FC<{
  petId: string;

  show: boolean;
  handleClose: () => void;
}> = function(props) {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    message: "",
    phone: ""
  });

  const handleSubmit = () => {
    // send
    console.log(formState);
    props.handleClose();
  };

  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Inquiry Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalForm
            onFormChanged={state => {
              console.log(state);
              setFormState(state);
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit Request
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MyModal;
