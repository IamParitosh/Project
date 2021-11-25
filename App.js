import React from 'react';
import './App.css';
import Header from './component/layout/Header';
import Footer from "./component/layout/Footer"
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./component/Home/Home"
// import Dashboard from './component/Admin/Dashboard';

function App() {
  return (
    <Router>
          <Header />
          <Route exact path="/" component={Home} />

          {/* <Route exact path="/admin/dashboard" component={Dashboard} /> */}

          <Footer />
    </Router>
   
  );
}

export default App;
