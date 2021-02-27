import React, { useState } from "react";
import { Segment, Form, Input } from "semantic-ui-react";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  return (
    <Segment padded="very">
      <div style={{ marginTop: "50px", marginBottom: "50px" }}>
        <Form>
          <Form.Group widths="equal">
            <Form.Field
              width={8}
              id="form-input-control-name"
              control={Input}
              label="Name"
            />
            <Form.Field
              width={8}
              id="form-input-control-email"
              control={Input}
              label="Email"
            />
          </Form.Group>
          <Form.TextArea label="Message Me" placeholder="Tell me stuff!" />
        </Form>
      </div>
    </Segment>
  );
};
export default Contact;
