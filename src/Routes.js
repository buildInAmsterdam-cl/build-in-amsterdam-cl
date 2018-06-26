import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Cases from './Components/Cases/Cases';

export default (
    <Switch>
        <Route path='/' component={Cases} exact />
    </Switch>
)