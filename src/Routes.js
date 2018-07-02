import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Cases from './Components/Cases/Cases';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import CaseCreator from './Components/CaseInfo/CaseCreator';

export default (
    <Switch>
        <Route path='/' component={Cases} exact />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/case/:id' component={CaseCreator} />
    </Switch>
)