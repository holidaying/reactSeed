import React from 'react';
import { Input } from 'antd';
export default  class Login extends React.Component {
  render() {
    return (<div className="login-container">
      <div className="form_login">
        <Input placeholder="请输入用户名" />
        <Input placeholder="请输入密码" />
      </div>
    </div>);
  }
}