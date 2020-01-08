import { Layout, Menu, Breadcrumb,Icon } from 'antd';
import Link from 'umi/link';
import React from 'react';
import withRouter from 'umi/withRouter';

const { Header, Content, Footer } = Layout;

function Layouts({ children,location }) {
    return (
        <div>
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={[location.pathname]}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="/">
                        <Link to="/"><Icon type="home" />Home</Link>
                        </Menu.Item>
                        <Menu.Item key="/users">
                        <Link to="/users"><Icon type="user" />Users</Link>
                        </Menu.Item>
                        <Menu.Item key="/userPage">
                        <Link to="/userPage"><Icon type="usergroup-delete" />Pagination</Link>
                        </Menu.Item>
                        <Menu.Item key="/tree">
                        <Link to="/tree"><Icon type="caret-down" />Tree</Link>
                        </Menu.Item>
                        <Menu.Item key="/map">
                        <Link to="/map"><Icon type="column-width" />Map</Link>
                        </Menu.Item>
                        <Menu.Item key="/grid">
                        <Link to="/grid"><Icon type="column-width" />Grid</Link>
                        </Menu.Item>
                        <Menu.Item key="/upload">
                        <Link to="/upload"><Icon type="upload" />Buttons</Link>
                        </Menu.Item>

                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>Users</Breadcrumb.Item>
                        <Breadcrumb.Item>Upload</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ background: '#fff', padding: 24, minHeight: 420 }}>
                        {children}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </div>
    );
}

export default withRouter(Layouts);


