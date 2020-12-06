import React, {Component} from 'react';
import './App.css';
import Homepage from "./routes/homepage/homepage";
import Bratari from "./routes/bratari/bratari";

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"

import Aranjamente from "./routes/aranjamente/aranjamenteFlorale";
import CeasuriB from "./routes/watchs/ceasuriB";
import CeasuriF from "./routes/watchs/ceasuriD";
import SeturiB from "./routes/seturi/seturiB";
import SeturiD from "./routes/seturi/seturiD";
import SeturiC from "./routes/seturi/seturiC";


class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route exact path="/rine_store" component={Homepage}/>
                        <Route path="/rine_store/aranjamente" component={Aranjamente}/>
                        <Route path="/rine_store/bratari" component={Bratari}/>
                        <Route path="/rine_store/ceasuriB" component={CeasuriB}/>
                        <Route path="/rine_store/ceasuriF" component={CeasuriF}/>
                        <Route path="/rine_store/seturiB" component={SeturiB}/>
                        <Route path="/rine_store/seturiD" component={SeturiD}/>
                        <Route path="/rine_store/seturiC" component={SeturiC}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;


