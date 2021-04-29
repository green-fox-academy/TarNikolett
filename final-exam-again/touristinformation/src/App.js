import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from './HomePage.js';
import NewAttractionForm from './NewAttraction.js';
import EditAttractionForm from './EditAttractionForm.js';

function App() {
  return (
    <Router>
    <div>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/attraction/new">
        <NewAttractionForm />
      </Route>
      <Route path="/attraction/edit/:id">
        <EditAttractionForm />
      </Route>
    </div>
  </Router>
  )
}

export default App;