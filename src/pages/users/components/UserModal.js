import { Modal, Button, Input,  Form } from 'antd';
import React from 'react';

class LocalizedModal extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      visible: false,
    };
  }


  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  hideModal = () => {
    this.setState({
      visible: false,
    });
  };

  okHandler = () => {
    const { onOk } = this.props;
    this.props.form.validateFields((err, values) => {
   
      if (!err) {       

        onOk(values);
       // console.log(values); 
        this.hideModal();

      }
    });
  };


  render() {
    const { getFieldDecorator } = this.props.form;
    const { name, number } = this.props.record;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    return (
      <div>
        <Button type="danger" onClick={this.showModal}>Create User</Button>
        <Modal
          title="请输入姓名和号码"
          visible={this.state.visible}
          onOk={this.okHandler}
          onCancel={this.hideModal}
          okText="确认"
          cancelText="取消"
        >
          <Form layout="horizontal" onSubmit={this.okHandler}>
            <Form.Item
              {...formItemLayout}
              label="Name"
            >
              {
                getFieldDecorator('name', {
                  initialValue: name,
                })(<Input />)
              }
            </Form.Item>
            <Form.Item
              {...formItemLayout}
              label="number"
            >
              {
                getFieldDecorator('number', {
                  initialValue: number,
                })(<Input />)
              }
            </Form.Item>

          </Form>
        </Modal>
      </div>
    );
  }

}

export default Form.create()(LocalizedModal);




