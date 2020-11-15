import React, { Component } from 'react';
import './App.css';
import Homepage from "./routes/homepage/homepage";
import Bratari from "./routes/bratari/bratari";
import { makeStyles } from "@material-ui/core/styles";
import Ochelari from "./routes/glasses/ochelari";
import CostumBaie from "./routes/costumBaie/costumBaie";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
import Aranjamente from "./routes/aranjamente/aranjamenteFlorale";
import CeasuriB from "./routes/watchs/ceasuriB";
import CeasuriF from "./routes/watchs/ceasuriF";


class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route path="/"> <Homepage/> </Route>
                        <Route path="/ochelari"><Ochelari /> </Route>
                        <Route path="/bratari"> <Bratari /></Route>
                        <Route path="/ochelari"> <Ochelari /></Route>
                        <Route path="/costumBaie"> <CostumBaie /></Route>
                        <Route path="/ceasuriB"> <CeasuriB /></Route>
                        <Route path="/ceasuriF"> <CeasuriF /></Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;


