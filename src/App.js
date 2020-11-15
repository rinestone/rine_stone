import React from 'react';
import './App.css';
import Homepage from "./routes/homepage/homepage";
import Bratari from "./routes/bratari/bratari";
import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Ochelari from "./routes/glasses/ochelari";
import CostumBaie from "./routes/costumBaie/costumBaie";
import Aranjamente from "./routes/aranjamente/aranjamenteFlorale";
import CeasuriB from "./routes/watchs/ceasuriB";
import CeasuriF from "./routes/watchs/ceasuriF";


function App() {
    return (
    <div className="App">
        <Switch>
            <Route exact from="/rine_store/" render={props => <Homepage {...props} />} />
            <Route exact path="/rine_store/bratari" render={props => <Bratari {...props} />} />
            <Route exact path="/rine_store/ochelari" render={props => <Ochelari {...props} />} />
            <Route exact path="/rine_store/costumBaie" render={props => <CostumBaie {...props} />} />
            <Route exact path="/rine_store/aranjamente" render={props => <Aranjamente {...props} />} />
            <Route exact path="/rine_store/ceasuriB" render={props => <CeasuriB {...props} />} />
            <Route exact path="/rine_store/ceasuriF" render={props => <CeasuriF {...props} />} />
        </Switch>
    </div>
    );
}

export default App;


