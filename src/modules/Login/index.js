import React from 'react';
import { Input,Button } from 'antd';
import "./index.scss";
import {login} from "src/apis/loginService"
export default  class Login extends React.Component {
  constructor(){
    super();
    this.state = {
      username: "",
      password:""
    };
    // this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    });
    // this.setState({value: event.target.value});
  }
  handleSubmit(){
    // login({username:this.state.username,password:this.state.password}).then(res=>{
    //   this.props.history.push('/index')
    // })
    this.props.history.push('/index')
  }
  render() {
    return (<div className="login-container">
      <video src="/video.mp4" muted autoPlay loop="loop" className="video-bg"></video>
      <div className="form-login">
        <Input placeholder="请输入用户名" name="username" value={this.state.username} type="text" onChange={(e)=>this.handleChange(e)} />
        <Input placeholder="请输入密码"  name="password" value={this.state.password} type ="password" onChange={(e)=>this.handleChange(e)} />
        <div className="footer">
          <Button onClick={() => this.handleSubmit()} type="primary" size="large">登陆</Button>
        </div>
      </div>
    </div>);
  }
}