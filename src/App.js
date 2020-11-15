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
                        <Route exact path="/rine_store" component={Homepage}/>
                        <Route path="/rine_store/aranjamente" component={Aranjamente}/>
                        <Route path="/rine_store/ochelari" component={Ochelari}/>
                        <Route path="/rine_store/bratari" component={Bratari}/>
                        <Route path="/rine_store/costumeBaie" component={CostumBaie}/>
                        <Route path="/rine_store/ceasuriB" component={CeasuriB}/>
                        <Route path="/rine_store/ceasuriF" component={CeasuriF}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;


