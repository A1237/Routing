import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";

const Homepage = props => {
  console.log(props);
  return (
    <div>
      <button onClick={() => props.history.push("/about")}>about button</button>
      <br />
      <Link to="/contact">contact</Link>
      <h1>Homepage</h1>
    </div>
  );
};

const AboutPage = props => {
  console.log(props);
  return (
    <div>
      <Link to="/">homepage</Link>
      <br />
      <Link to="/contact">contact</Link>
      <h1>About Page</h1>
    </div>
  );
};

const AboutPageDetail = props => {
  console.log(props);
  console.log(props.match.params);
  return (
    <div>
      <h1>About Page Detail :{props.match.params.aboutId}</h1>
    </div>
  );
};

const ContactPage = props => {
  console.log(props);
  return (
    <div>
      <Link to="/">homepage</Link>
      <br />
      <Link to="/about">about</Link>
      <h1>Contact Page</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Link />
      <Route exact path="/" component={Homepage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/about/:aboutId" component={AboutPageDetail} />
      <Route path="/contact" component={ContactPage} />
    </div>
  );
}

export default App;
