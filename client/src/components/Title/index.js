import React from 'react';
import './style.css';
import { Jumbotron } from 'reactstrap';

const Title = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Google Books Search</h1>
        <p className="lead">Search for your favorite books and save them to review at your convenience.</p>
        {/* <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p> */}
      </Jumbotron>
    </div>
  );
};

export default Title;