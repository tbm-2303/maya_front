import React from 'react'
import { useParams } from 'react-router-dom';
import {Button, Col, Container, Row, Card, Label} from "react-bootstrap";
import { useState, useEffect } from 'react';

const Guideinfo = () => {
  const { guideId } = useParams();
  const [guide, setGuide] = useState({
    id: 1, name: "john", gender: "male", BirthYear: "1990", profile: "enthologist", imgUrl: "https://cdn-production.checkfront.com/wp-content/uploads/2022/05/img_6273f0e0deafc.jpg"
  });





  return (
    <div>
    
      <Row>
        <Col></Col>
        <Col>  
          <h1>Guideinfo</h1>
          <Card>
            <Card.Img  variant="top" src={guide.imgUrl} />
            <Card.Body>
              <Card.Title>Guide info</Card.Title>
              <Card.Text>
                Name: {guide.name}
                <br/>
                Gender: {guide.gender}
                <br/>
                Birthyear: {guide.BirthYear}
                <br/>
                Profile: {guide.profile}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </div>
  )
}

export default Guideinfo
