import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Header from "./components/Header";
import NotesCard from "./components/NotesCard";

function App() {
  return (
    <div className="row">
      <div className="title-container">
        <Header />
      </div>
      <div className="notes-container">
        <div className="buttons-container">
          <NotesCard />
        </div>
      </div>
    </div>
  );
}

export default App;
