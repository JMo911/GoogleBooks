import React from 'react';
import './style.css';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

const BookCards = (props) => {
  return (
    <div>
      <Card body className="text-center col-sm-10 offset-sm-1">
        <CardTitle>{props.title}</CardTitle>
        <CardText>{props.description}</CardText>
        <CardText>{props.authors}</CardText>
        {/* <CardText>{props.description}</CardText> */}
        {/* <Button href={'https://na.leagueoflegends.com' + props.href} target='_blank' className='col-sm-4 offset-sm-4'>Read More</Button> */}
        <Button className="btn btn-info col-sm-4 offset-sm-4" onClick={() => props.saveBook()}>Save Book</Button>
      </Card>
    </div>
  );
};

export default BookCards;