import { useState, useEffect } from "react";
import {Button, Col, Container, Row, Card, Table} from "react-bootstrap";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from "react-router-dom";


const TripsAdmin = () => {
  const [myData, setMyData] = useState([]); // get all trips 
 

  useEffect(() => {
   setMyData([ 
    { id: 1, name: "basketball match", date: "01/01/23", time: "9PM EST", location: "New York", duration : "2 hours",guide: {id: 1, name: "john"}, users: [{id:1, name: "tim"},{id: 2, name: "jam"}]},
    { id: 2, name: "lan", date: "01/02/23", time: "10PM EST", location: "New York", duration : "2 hours",guide: {id: 1, name: "john"}, users: [{id:1, name: "tim"},{id: 2, name: "jam"}]},
    { id: 3, name: "concert", date: "01/03/23", time: "11PM EST", location: "New York", duration : "2 hours", guide: {id: 3, name: "john"}, users: [{id:1, name: "tim"},{id: 2, name: "jam"}]},
    { 
      id: 4, 
      name: "fishing", 
      date: "01/04/23", 
      time: "12PM EST", 
      location: "Texas", 
      duration : "2 hours", 
      guide: {id: 4, name: "john"},
      users: [{id:3, name: "nico"},{id: 2, name: "jam"}]
    }
    ])

  }, [])




  return (
    <Container className="shadow-lg p-5 mb-5 bg-white rounded mt-5">
      <Row>
        <Col></Col>
        <Col xs={6} >
          <h2>Upcoming Trips</h2>
          <Table  striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Event Name</th>
                <th>Date</th>
                <th>Time</th>
                <th>Location</th>
                <th>Duration</th>
                <th>Guide</th>
              </tr>
            </thead>
            <tbody>
              {myData.map((data) => (
                <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.date}</td>
                  <td>{data.time}</td>
                  <td>{data.location}</td>
                  <td>{data.duration}</td>
                  <td> 
                    <Link to={`/guideinfo/${data.guide.id}`}
                      key={data.guide.id}>Guide info
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
        <Col></Col>
      </Row>
    </Container>
    
  )
}

export default TripsAdmin
