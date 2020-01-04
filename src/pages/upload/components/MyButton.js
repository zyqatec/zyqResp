import { Button, Icon, Typography  } from 'antd';
import React from 'react';

const { Paragraph } = Typography;

class App extends React.Component {
  state = {
    loading: false,
    iconLoading: false,
    str: 'This is an editable text.',
  };
  

  onChange = str => {
    console.log('Content change:', str);
    this.setState({ str });
  };

  enterLoading = () => {
    this.setState({ loading: true });
  };

  enterIconLoading = () => {
    this.setState({ iconLoading: true });
  };

  render() {
    return (
      <div>
        <div >
          <Button type="primary" loading>
            Loading
        </Button>
          <br />
          <Button type="primary" size="small" loading>
            Loading
        </Button>
          <br />
          <Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>
            Click me!
        </Button>
          <Button
            type="primary"
            icon="poweroff"
            loading={this.state.iconLoading}
            onClick={this.enterIconLoading}
          >
            Click me!
        </Button>
          <br />
          <Button type="primary" loading />
          <Button type="primary" shape="circle" loading />
          <Button type="danger" shape="round" loading />
        </div>

        <div style={{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }}>
          <Button type="primary" ghost>
            Primary
          </Button>
          <Button ghost>Default</Button>
          <Button type="dashed" ghost>
            Dashed
          </Button>
          <Button type="danger" ghost>
            danger
          </Button>
          <Button type="link" ghost>
            link
          </Button>
        </div>

        <div>
          <h4>Basic</h4>
          <Button.Group>
            <Button>Cancel</Button>
            <Button>OK</Button>
          </Button.Group>
          <Button.Group>
            <Button disabled>L</Button>
            <Button disabled>M</Button>
            <Button disabled>R</Button>
          </Button.Group>
          <Button.Group>
            <Button>L</Button>
            <Button>M</Button>
            <Button>R</Button>
          </Button.Group>

          <h4>With Icon</h4>
          <Button.Group>
            <Button type="primary">
              <Icon type="left" />
              Go back
      </Button>
            <Button type="primary">
              Go forward
        <Icon type="right" />
            </Button>
          </Button.Group>
          <Button.Group>
            <Button type="primary" icon="cloud" />
            <Button type="primary" icon="cloud-download" />
          </Button.Group>
          <Button.Group>
            <Button type="primary" size="small" icon="cloud" />
            <Button type="primary" size="small" icon="cloud-download" />
          </Button.Group>
        </div>

        <div>
          <Paragraph editable={{ onChange: this.onChange }}>{this.state.str}</Paragraph>
          <Paragraph copyable>This is a copyable text.</Paragraph>
          <Paragraph copyable={{ text: 'Hello, Ant Design!' }}>Replace copy text.</Paragraph>
        </div>
      </div>
    );
  }
}

export default App;