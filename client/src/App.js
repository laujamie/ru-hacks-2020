import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Container, Button, Row, Col } from "react-bootstrap";
import Header from "./components/Header";
import NotesCard from "./components/NotesCard";

function App() {
  return (
    <div>
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-x-5 title-container">
                <Header />
              </div>
              <div className="col-xs-7 notes-container">
                <NotesCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
