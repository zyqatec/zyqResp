import { Card } from 'antd';
import React, { Component } from 'react';
import { connect } from 'dva';


class MyCard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        const data = this.props.list;
        const id = this.props.currentId;
        const obj={name:null,body:null};
        
        for(let item of data){
            if(item.id===parseInt(id,10)){
            obj.name=item.name;
            obj.body=item.body;
            }
        }
        console.log(obj);
           
        console.log(id);
        
        return (

            <Card 
            title={obj.name}>
                <p>
                {obj.body}
                    </p>
            </Card>

        );
    }
}

function mapStateToProps(state) {
    const { list, currentId } = state.usertree;
    return { list, currentId }

}
export default connect(mapStateToProps)(MyCard);
