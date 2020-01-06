import { Tree, Icon } from 'antd';
import React from 'react';
import { connect } from 'dva'


const { TreeNode } = Tree;


class MyTree extends React.Component {
    onSelect = (selectedKeys) => {
        const currentId=selectedKeys[0];
        // console.log(currentId);
        this.props.dispatch(
            {
                type:'usertree/loadCurrentId',
                payload:{currentId},
        });      
    };

    render() {

        

        //对异步请求得到的数组进行处理
        const data = this.props.list;
        let i = 1;
        const arrall = [];
        let arr = [];
        for (let item of data) {
            if (item.postId === i) {
                arr.push(item);
            }else{
                const obj = {
                    postId: i,
                    children: JSON.parse(JSON.stringify(arr)),
                };                          
            arrall.push(obj);
            arr = [];
            arr.push(item);
            i++;
            }
        }
        const obj = {
            postId: i,
            children: JSON.parse(JSON.stringify(arr)),
        };    
        arrall.push(obj);
        //console.log(arrall);
        

        return (
            <Tree
                showLine
                switcherIcon={<Icon type="down" />}
                defaultExpandedKeys={['0-0-0']}
                onSelect={this.onSelect}
            >
                {arrall.map(item=>{
                    return(
                        <TreeNode
                        title={'第'+item.postId+'批'}
                        key={'第'+item.postId+'批'}
                        >
                            {item.children.map(child=>{
                                return (
                                    <TreeNode
                                    title={child.email}
                                    key={child.id}                               
                                    >
                                       
                                    </TreeNode>
                                )
                            })}

                        </TreeNode>
                    )
                })}
            </Tree>
        );
    }
}

function mapStateToProps(state) {
    const { list,currentId } = state.usertree;
    return {
        list,
        currentId,
    }
}

export default connect(mapStateToProps)(MyTree);