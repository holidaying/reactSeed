import React from 'react'
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Login from "./modules/Login"
import Index from "./modules/Index"
// import * as base from '@pages/base' // 基础
// import * as sysSet from '@pages/set' // 设置中心-系统设置
// import * as menu from '@pages/menu' // 菜单

// export default () => (
//   <Router history={hashHistory}>
//     <Route path="/" component={base.app} onEnter={isLogin}>
//       <IndexRoute component={base.example} />
//       <Route path="/desk$/index" component={base.example} />
//       {/* <Route path="/socketReceive" component={base.socketReceive} /> */}
//       {/** *菜单 开始 */}
//       <Route path="/echarts" component={menu.echarts} />
//       <Route path="/editor" component={menu.editor} />
//       {/** *菜单 结束 */}
//       {/** *系统设置 开始 */}
//       <Route path={`/${set}/userManage`} component={sysSet.userManage} />
//       <Route path={`/${set}/roleManage`} component={sysSet.roleManage} />
//       <Route path={`/${set}/moduleManage`} component={sysSet.moduleManage} />
//       {/** *系统设置 结束 */}
//     </Route>
//     <Route path="/login" component={base.login} />
//     <Route path="*" component={base.notfound} />
//   </Router>
// )
export default () => (
    <Router >
        <Switch>
            <Route exact path='/login' component={Login} />
            <Route path="/">
                <div>
                    33333
                </div>
                <Switch>
                    <Route path="/index">
                        <Index />
                    </Route>
                    <Route path="/main">
                        <p>888</p>
                    </Route>
                </Switch>
            </Route>
        </Switch>
    </Router >
)