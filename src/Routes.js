import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Cases from './Components/Cases/Cases';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import CaseCreator from './Components/CaseInfo/CaseCreator';
import case1 from './Components/CaseComponents/case1';

export default (
    <Switch>
        <Route path='/' component={Cases} exact />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/case/:id' component={CaseCreator} />
        <Route path='/hardcodecase/1' component={case1} /> {/*This is just me testing with other components inside a different case. <---Jon*/}
    </Switch>
)