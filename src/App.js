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
                        <Route exact path="/" component={Homepage}/>
                        <Route path="/aranjamente" component={Aranjamente}/>
                        <Route path="/ochelari" component={Ochelari}/>
                        <Route path="/bratari" component={Bratari}/>
                        <Route path="/costumeBaie" component={CostumBaie}/>
                        <Route path="/ceasuriB" component={CeasuriB}/>
                        <Route path="/ceasuriF" component={CeasuriF}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;


