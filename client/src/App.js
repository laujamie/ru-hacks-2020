import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/Header';
import NotesCard from './components/NotesCard';
import { reducer, initialState } from './stores/store';

function App() {
  const [store, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="row">
      <div className="title-container">
        <Header />
      </div>
      <div className="notes-container">
        <div className="buttons-container">
          <NotesCard store={store} dispatch={dispatch} />
        </div>
      </div>
    </div>
  );
}

export default App;
