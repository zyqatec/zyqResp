import MyTree from "./components/MyTree"
import MyCard from "./components/MyCard"
import {Layout} from 'antd';

export default () => {
    return (
        <div >
            <Layout>
                <Layout.Sider width={200} style={{ background: '#fff' }}>
                    <MyTree />
                </Layout.Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Layout.Content
                        style={{
                            background: '#fff',
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        <MyCard />
                    </Layout.Content>
                </Layout>
            </Layout>
        </div>



    )

}