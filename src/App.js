import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useEffect } from "react";
import { fetchPatientData } from "./redux/action/index";
import { useDispatch } from "react-redux";


import Home from "./Home";
import Calendar from "./Calendar";
import Day from "./Day";

import generateRandomAppointments from "./utils";





const appointments = generateRandomAppointments(70);

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(fetchPatientData())
         // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/calendar">Calendar view</Link>
            </li>
            <li>
              <Link to="/day">Day view</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Switch>
            <Route path="/calendar">
              <Calendar appointments={appointments} />
            </Route>
            <Route path="/day">
              <Day appointments={appointments.filter((app) => app.day === 1)} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  )
};
export default App;
