import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const CardForm = ({addCard}) => {
  return (
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Title</Label>
        <Input
          type="text"
          name="Title"
          placeholder="Title"
        />
      </FormGroup>

      <FormGroup>
        <Label for="examplePassword">Subtitle</Label>
        <Input
          type="subtitle"
          name="Subtitle"
          placeholder="Subtitle"
        />
      </FormGroup>

      <FormGroup>
        <Label for="exampleText">Content</Label>
        <Input
          type="textarea"
          name="Text"
          id="exampleText"
        />
      </FormGroup>

      <Button
        onClick={() =>
          addCard({
            title: 'Added Card',
            subtitle: 'metus magna maximus nibh, in molestie',
            text:
              'Cras at enim tristique, pretium dolor quis, interdum risus. Aenean dictum quam quis maximus auctor. Proin dapibus, quam sed luctus aliquam, ligula dolor tincidunt purus, et porttitor felis purus id justo',
          })
        }
      >
        Submit
      </Button>
    </Form>
  );
};

export default CardForm;
