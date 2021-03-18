import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import ListPianosComponent from './ListPianosComponent';
import PianoComponent from './PianoComponent';
import PianoAddComponent from './PianoAddComponent';
import LoginComponent from './LoginComponent';


class PianoApp extends Component{
    render(){
        return(
            <Router>
                <>
                    <h1>&nbsp;React Application</h1>
                    <Switch>
                        <Route path="/" exact component={LoginComponent} />
                        <Route path="/login" exact component={LoginComponent} />
                        <Route path="/pianos" exact component={ListPianosComponent} />
                        <Route path="/pianos/update/:id" component={PianoComponent} />
                        <Route path="/pianos/add/-1" component={PianoAddComponent} />
                    </Switch>
                    
                    
                </>
            </Router>
        )
        
    }

}
export default PianoApp;