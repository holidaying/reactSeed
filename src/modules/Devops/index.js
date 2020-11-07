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
                <Header>运维</Header>
                <Content>运维</Content>
                <Footer>运维</Footer>
            </Layout>);
    }
}