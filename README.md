## 脚本配置
```
"build": "webpack --config ./build/webpack.build.conf.js && node ./build/distserver.js",
    "build:pc": "webpack --config ./build/webpack.build.conf.js && node ./build/distserver.js & gulp copy --sysname=pc",
    "build:web": "webpack --config ./build/webpack.build.conf.js && node ./build/distserver.js & gulp copy  --sysname=web",
    "dev:pc": "webpack-dev-server  --hot --open 'google chrome' --progress --config ./build/webpack.dev.conf.js --sysname=pc",
    "dev:web": "webpack-dev-server  --hot --open 'google chrome' --progress --config ./build/webpack.dev.conf.js --sysname=web",
```
## 路由
>react-router
```
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
```
## 请求
```
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
app.post('/education/api/login', function (req, res) {
    // 接收请求参数
    console.log(req.body.username);
    res.cookie("oath", Token.createToken(req.body.username, Date.now()), { maxAge: 900000, httpOnly: true });
    res.send({ "data": true })
})
```
## 事件、循环
```
handleSubmit(){
    login({username:this.state.username,password:this.state.password}).then(res=>{
      this.props.history.push('/index')
    })
  }
  render() {
    return (<div className="login-container">
      <video src="/video.mp4" muted autoPlay loop="loop" className="video-bg"></video>
      <div className="form-login">
        <Input placeholder="请输入用户名" name="username" value={this.state.username} type="text" onChange={(e)=>this.handleChange(e)} />
        <Input placeholder="请输入密码"  name="password" value={this.state.password} type ="password" onChange={(e)=>this.handleChange(e)} />
        <div className="footer">
```
## 父子消息传递

>
父组件给子组件传递数据：直接在调用子组件的地方传递数据即可。

调用子组件的方法：简单说就是给子组件，通过ref起个名字，然后在父组件的点击事件中，通过this.refs.子组件的名字.子组件的方法来实现

子组件调用父组件的方法。在调用子组件的地方将方法传递，子组件中通过this.props。父组件传递的方法即可

子组件给父组件传递数据：通过调用父组件的方法时，通过callback回调传递数据。this.props.父组件的方法（传递的数据）


## 组件
> function函数、class es6语法

## 按需

>
利用react-loadable这个高级组件，要做到实现按需加载这一点，我们将使用的WebPack，babel-plugin-syntax-dynamic-import和react-loadable。

npm i --save-dev babel-plugin-syntax-dynamic-import
npm i --save-dev react-loadable

## typescript

## 单元测试

## 兄弟节点信息传递 redux和eventhub
>
（1）Web 应用是一个状态机，视图与状态是一一对应的。
（2）所有的状态，保存在一个对象里面。
## 多页面
```
   new HtmlWebpackPlugin({
                title: '主页面',
                filename: 'index.html',
                template: resolve('../src/template/index.html'),
                hash: true, // 会在打包好的bundle.js后面加上hash串
                inject: "body",
                chunks:["home"]
            }),
            new HtmlWebpackPlugin({
                title: '跳转页面',
                filename: 'page.html',
                template: resolve('../src/template/page.html'),
                hash: true, // 会在打包好的bundle.js后面加上hash串
                inject: "body",
                chunks: ["page"]
            })
        ],
```
## 依赖动态加载和独立部署

## 微前端
>乾坤/sigle-spa
前端微服务化解决方案1 - 思考

前端微服务化解决方案2 - Single-SPA

前端微服务化解决方案3 - 模块加载器

前端微服务化解决方案4 - 消息总线

前端微服务化解决方案5 - 路由分发

前端微服务化解决方案6 - 构建与部署

前端微服务化解决方案7 - 静态数据共享

前端微服务化解决方案8 - 二次构建

## docker
>
#可访问 https://hub.docker.com/_/nginx 查看python镜像源
FROM nginx:1.15.2-alpine
#将当前目录下dist文件夹所有文件都拷贝到image文件中指定目录
COPY ../dist /
COPY default.conf /etc/nginx/conf.d/default.conf
# 开放容器的80端口，允许外部访问这个端口
EXPOSE 80

>构建镜像
```
docker image build -t front .

```

>构建容器

```
docker run -p 82:82 --name front -d front 

```
