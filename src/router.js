import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Login from "./modules/Login"
import Index from "./modules/Index"
import Log from "./modules/Log"
import Devops from "./modules/Devops"
import NavApp from "./App"

export default () => (
    <Router >
        <Switch>
            <Route exact path='/login' component={Login} />
            <Route path="/">
                <div className="app-container">
                    <NavApp></NavApp>
                    <div className="main-container">
                        <Switch>
                            <Route path="/index">
                                <Index />
                            </Route>
                            <Route path="/log">
                                <Log/>
                            </Route>
                            <Route path="/devops">
                                <Devops/>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Route>
        </Switch>
    </Router >
)