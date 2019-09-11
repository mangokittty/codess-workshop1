import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import Pet from "../Pet";
import Modal from "./Modal/MyModal";

type Props = {
  pet: Pet;
};

class PetCard extends Component<
  Props,
  {
    show: boolean;
  }
> {
  constructor(props: Props) {
    super(props);

    this.state = {
      show: false
    };
  }

  show = false;

  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={
            "https://source.unsplash.com/collection/212527/200x200/?sig=" +
            Math.floor(Math.random() * 100)
          }
        />
        <Card.Body>
          <Card.Title>{this.props.pet.name}</Card.Title>
          <Card.Text>{this.props.pet.description}</Card.Text>
          <Button variant="primary" onClick={() => this.handleShow()}>
            Adopt
          </Button>
        </Card.Body>
        <Modal
          show={this.state.show}
          petId={this.props.pet.id}
          handleClose={() => this.handleClose()}
        />
      </Card>
    );
  }

  setShow(value: boolean) {
    this.setState({
      show: value
    });
  }

  handleShow() {
    this.setShow(true);
  }

  handleClose() {
    this.setShow(false);
  }
}
export default PetCard;
