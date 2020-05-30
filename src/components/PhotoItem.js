import React from 'react'
import { Card, Button, Col } from 'react-bootstrap';

const PhotoItem = ({title, thumbnailUrl}) => {
    return (
    <Col md="auto" syle={{marginTop: 16}}>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={thumbnailUrl} />
    <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Button variant="primary">Edit</Button>
    <Button variant="danger" style={{marginLeft: 16}}>danger</Button>
  </Card.Body>
  </Card>
  </Col>
    )
}

export default PhotoItem; 