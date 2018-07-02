import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Cases from './Components/Cases/Cases';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import casedummy2 from './Components/CaseComponents/casedummy2';
<<<<<<< HEAD
// import case1 from './Components/CaseComponents/case1'
import CaseCreator from './Components/CaseInfo/CaseCreator';
=======
import case1 from './Components/CaseComponents/case1'
import Case7 from './Components/CaseComponents/case7';
>>>>>>> db8ece7e56a6dc08bf2412af07aceeecc4008004

export default (
    <Switch>
        <Route path='/' component={Cases} exact />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
<<<<<<< HEAD
        <Route path='/case2' component={casedummy2} />
        {/* <Route path='/case1' component={case1} /> */}
        <Route path='/case/:id' component={CaseCreator} />
=======
        <Route path='/case1' component={case1} />
        <Route path='/case2' component={casedummy2} />
        <Route path='/case7' component={Case7} />
>>>>>>> db8ece7e56a6dc08bf2412af07aceeecc4008004
    </Switch>
)