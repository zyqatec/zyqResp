import { List, Avatar, Popconfirm, message } from 'antd';
import { connect } from 'dva';
import UserModal from './UserModal'

function Users({ usersList, dispatch }) {

    function createHandler(values) {
        const id = usersList.length + 1;
        const number = parseInt(values.number, 10);
        values.number = number;
        const currentUser = { id, ...values };
//通过dispatch将action发送给model,进行state的更新
        dispatch({
            type: 'users/createUsers',
            payload: currentUser,
        });

    }

    function confirm(e) {
        // console.log(e);
        message.success('已成功删除!');
    }

    function cancel(e) {
        //console.log(e);
        message.error('删除失败!');
    }

    function deleteHandler(index) {
        console.log(index);
        dispatch({
            type: 'users/deleteUsers',
            payload: index,

        });
        confirm();
    };




    return (
        <div >
            {/* 将转为props的usersList传给子组件   */}
            <UserModal
                usersList={usersList}
                record={{}}
                onOk={createHandler} />
            <List
                itemLayout="horizontal"
                dataSource={usersList}
                renderItem={(item,index) => (
                    <List.Item >
                        <List.Item.Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title={<a href="https://ant.design">{item.name}</a>}
                            description={item.number}

                        />
                        <Popconfirm
                            title="Are you sure delete this user?"
                            onConfirm={deleteHandler.bind(this,index)}
                            onCancel={cancel}
                            okText="Yes"
                            cancelText="No"

                        >
                            <a href="#" >Delete</a>
                        </Popconfirm>

                    </List.Item>
                )}

            />

        </div>
    );

}

function mapStateToProps(state) {
    const usersList = state.users.usersList;
    // console.log(usersList);
    return {
        usersList
    }
}


export default connect(mapStateToProps)(Users);