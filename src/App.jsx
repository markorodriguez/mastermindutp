import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Juego from "./components/Juego";
import Reglas from "./components/Reglas";
import Ranking from "./components/Ranking"

import "./App.css"



function App() {
    return (
        <Router>
            <nav className="navbar navbar-lg navbar-dark bg-dark">
                <div className="container">
                    <span className="navbar-brand"> <h4>Mastermind</h4></span>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/juego">Jugar</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/ranking">Ranking</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Switch>
                <Route exact path="/">
                    <Reglas/>
                </Route>
                <Route exact path="/juego">
                    <Juego />
                </Route>
                <Route exact path="/ranking">
                    <Ranking />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
