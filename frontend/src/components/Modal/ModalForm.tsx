import React, { useState } from "react";
import { Form, FormGroup, FormLabel } from "react-bootstrap";
import { ReplaceProps, BsPrefixProps } from "react-bootstrap/helpers";
import { FormControlProps } from "react-bootstrap";

export interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ModalForm: React.FC<{
  onFormChanged: (values: FormState) => void;
}> = function(props) {
  let [name, setName] = useState("");

  const updateFormState = () => {
    props.onFormChanged({
      name: name,
      email: "",
      message: "",
      phone: ""
    });
  };

  return (
    <Form>
      <Form.Group>
        <Form.Label>Your Name</Form.Label>
        <Form.Control
          type="text"
          defaultValue={name}
          onChange={updateFormState}
        ></Form.Control>
      </Form.Group>
    </Form>

    //     <input
    //       type="text"
    //       className="form-control"
    //       id="name"
    //       placeholder="Name"
    //       value={name}
    //       onChange={}
    //     />
    //   </div>
    //   <div className="form-group">
    //     <label htmlFor="email"> Email Address</label>
    //     <input
    //       type="email"
    //       className="form-control"
    //       id="email"
    //       placeholder="jo@bloggs.com"
    //       onChange={updateFormState}
    //     />
    //   </div>
    //   <div className="form-group">
    //     <label htmlFor="phone"> Phone Number</label>
    //     <input
    //       type="text"
    //       className="form-control"
    //       id="phone"
    //       placeholder="Mobile Phone"
    //       onChange={updateFormState}
    //     />
    //   </div>
    //   <div className="form-group">
    //     <label htmlFor="message">Message</label>
    //     <input
    //       type="text"
    //       className="form-control"
    //       id="message"
    //       placeholder="Please enter your message about adopting this pup."
    //       onChange={updateFormState}
    //     />
    //   </div>
    // </form>
  );
};

export default ModalForm;
