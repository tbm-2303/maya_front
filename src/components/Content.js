import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../routes/Home";
import Navbar from "../navbar/Navbar";
import LoginForm from "../components/LoginForm";
import Guideinfo from './Guideinfo';
import { ToastContainer, toast } from 'react-toastify';
import Frontpage from './Frontpage';
import Mytrips from './Mytrips';
import CreateTrip from './CreateTrip';
import TripsAdmin from './TripsAdmin';

const Content = ({ loggedIn,login,user,logout}) => {
    return (
        <Router>
            <Navbar user={user} loggedIn={loggedIn} login={login} logout={logout}/>
            <ToastContainer 
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"/>
            <Routes>
                <Route path="/trips" element={<Home user={user}/>}/>
                <Route path="/login" element={<LoginForm login={login}/>}/>
                <Route path="/guideinfo/:guideId" element={<Guideinfo/>}/>
                <Route path="/frontpage" element={<Frontpage/>}/>
                
                <Route path="/createtrip" element={<CreateTrip/>}/>
                <Route path="/tripsadmin" element={<TripsAdmin/>}/>
            </Routes>
           
        </Router>
        
  )
}

export default Content
