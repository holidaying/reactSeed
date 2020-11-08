import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
function load(component) {
  return import(`src/modules/${component}`)//$pages在webpack里面配置过是“./src/pages”的别名
}
function Loading() {
    return <div>Loading...</div>;
  }
export default () => (
    <Router >
        <Switch>
            <Route path="/">
                <div className="app-container">
                   多页面跳转
                </div>
            </Route>
        </Switch>
    </Router >
)