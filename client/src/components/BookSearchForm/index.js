import React from 'react';
import './style.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const BookSearchForm = (props) => {
  return (
    <Form>
      <FormGroup>
        <Label for="bookInput">Book Search:</Label>
        <Input type="text" name="bookInput" placeholder="Enter book name here." onChange={props.handleChange} value={props.value}/>
      </FormGroup>
      <Button onClick={props.handleSubmit}>Search</Button>
    </Form>
  );
}

export default BookSearchForm;