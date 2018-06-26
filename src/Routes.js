import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Cases from './Components/Cases/Cases';

import Contact from './Components/Contact/Contact';

export default (
    <Switch>
        <Route path='/' component={Cases} exact />
        
        <Route path='/contact' component={Contact} />
    </Switch>
)