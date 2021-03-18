import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import NdiHome from "./components/Ndi/NdiHome";
import NavBar from "./components/NavBar/index";
import SideBar from "./components/SideBar/SideBar";
import React from "react"
import Footer from "./components/Footer";
import Elementry from "./components/samuel/Elementry/Elementry"
import CurriculumHolder from "./components/Peter/CurriculumHolder";
import Gideon from "./components/Prospects/Gideon";
import Overview from "./components/ola/Overview/MainPart/Overview"
import WhatisCodingPage from "./components/Lakun/WhatisCodingPage"

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Router>
      <NavBar toggle={toggle} />
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={NdiHome} />
        <Route exact path="/Elementry" component={Elementry} />
        <Route exact path="/curriculum" component={CurriculumHolder} />
        <Route exact path="/prospect" component={Gideon} />
        <Route exact path="/overview" component={Overview} />
        <Route exact path="/whatis" component={WhatisCodingPage} />
      </Switch>

    </Router>
  );
}

export default App;

// <Footer />
