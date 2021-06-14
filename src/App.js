import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./components/homePage";
import WithLoader from "./components/withLoader";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/loader" component={WithLoader} />
        <Route path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
