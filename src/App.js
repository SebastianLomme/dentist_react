import React  from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";


import Home from "./Home";
import Calendar from "./Calendar";
import Day from "./Day";

// import generateRandomAppointments from "./utils";
import { GetApointment } from "./Appointment";

// const appointments = generateRandomAppointments(70);
// console.log("appointments: ", appointments)


const App = () => {
  const appointmentState = useSelector(state => state.Appointment.allAppointments)
  GetApointment()
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
              <Calendar appointments={appointmentState} />
            </Route>
            <Route path="/day">
              <Day appointments={appointmentState.filter((app) => app.day === 1)} />
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
