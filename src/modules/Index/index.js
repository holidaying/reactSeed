import React from 'react';
import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;
export default class Index extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        };
        // this.handleChange = this.handleChange.bind(this);
    }
    render() {
        return (
            <Layout>
                <Header>首页</Header>
                <Content>首页</Content>
                <Footer>首页</Footer>
            </Layout>);
    }
}