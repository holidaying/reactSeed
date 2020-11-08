import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
// import Login from "./modules/Login"
// import Index from "./modules/Index"
// import Log from "./modules/Log"
// import Devops from "./modules/Devops"
import NavApp from "./App"
import Loadable from 'react-loadable';
function load(component) {
  return import(`src/modules/${component}`)//$pages在webpack里面配置过是“./src/pages”的别名
}
function Loading() {
    return <div>Loading...</div>;
  }
const Login = Loadable({  loader: () => load('Login'), loading: Loading});//loading属性必须有
const Index = Loadable({  loader: () => load('Index'), loading: Loading});//loading属性必须有
const Devops = Loadable({  loader: () => load('Devops'), loading: Loading,});
const Log = Loadable({  loader: () => load('Log'), loading: Loading,});
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