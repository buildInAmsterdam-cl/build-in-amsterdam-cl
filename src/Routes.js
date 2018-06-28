import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Cases from './Components/Cases/Cases';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import casedummy2 from './Components/CaseComponents/casedummy2';
import case1 from './Components/CaseComponents/case1'

export default (
    <Switch>
        <Route path='/' component={Cases} exact />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/case2' component={casedummy2} />
        <Route path='/case1' component={case1} />
    </Switch>
)