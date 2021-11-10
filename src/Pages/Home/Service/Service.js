import React from 'react';
import { ButtonGroup as Button, Card } from 'react-bootstrap';
import './Service.css';

const Service = ({service}) => {
    const {id, name, description, img} = service;
    return (
        <div className="p-10px">
            <Card style={{ width: '18rem'}}>
                <Card.Img className="img" src={img} />
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Button className="btn" variant="primary">Show Detail</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;