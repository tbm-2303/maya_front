import React from 'react'
import {useState, useEffect} from "react"
import {Button, Col, Container, Row, Card, Table} from "react-bootstrap";
import {Link} from "react-router-dom";

const Mytrips = () => {
  const [myData, setMyData] = useState([]); // get all trips thats not joined by this user
 

  useEffect(() => {// get all trips that are joined by this user
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


const handleDelete = (e) => {
  const trip_id = e.target.id;
  // facade.deleteTrip(trip_id);
  setMyData(myData.filter((data) => data.id != trip_id)); // remove trip from list of trips
};



  return (
    <div>
      <div>
        <Row>
          <Col></Col>
          <Col >
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
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {myData.map((trip) => (
                  <tr key={trip.id}>
                    <td>{trip.id}</td>
                    <td>{trip.name}</td>
                    <td>{trip.date}</td>
                    <td>{trip.time}</td>
                    <td>{trip.location}</td>
                    <td>{trip.duration}</td>
                    <td> <Link to={`/guideinfo/${trip.guide.id}`}
                            key={trip.guide.id}>Guide info
                        </Link>
                    </td>
                    <td><Button  variant="danger" onClick={(e)=> handleDelete(e)} id={trip.id}> Remove</Button></td>
                  </tr>
                ))}
              </tbody>
            </Table>
          
          </Col>
          <Col></Col>
        </Row>  
      </div>
      
    </div>
  )
}

export default Mytrips
