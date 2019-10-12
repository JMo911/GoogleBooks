import React from 'react';
import './style.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const BookSearchForm = (props) => {
  return (
    <Form>
      <FormGroup>
        <Label for="bookInput">Book</Label>
        <Input type="text" name="bookInput" placeholder="Enter book name here." />
      </FormGroup>
      <Button>Search</Button>
    </Form>
  );
}

export default BookSearchForm;