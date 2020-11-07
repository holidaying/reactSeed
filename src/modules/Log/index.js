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
                <Header>日志</Header>
                <Content>日志</Content>
                <Footer>日志</Footer>
            </Layout>);
    }
}