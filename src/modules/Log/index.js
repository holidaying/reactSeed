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
    openTab() {
        var key = Date.now();
        sessionStorage.setItem(key, JSON.stringify([]));
        window.open(`${location.protocol}//${location.host}/page.html?cacheKey=${key}`);
    }
    render() {
        return (
            <Layout>
                <Header>日志</Header>
                <Content><div onClick={() => this.openTab()}><a>打开多页面</a></div></Content>
                <Footer>日志</Footer>
            </Layout>);
    }
}