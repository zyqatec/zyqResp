import { Component } from 'react';
import dva from 'dva';
import createLoading from 'dva-loading';

let app = dva({
  history: window.g_history,
  
});

window.g_app = app;
app.use(createLoading());

app.model({ ...(require('D:/前端知识学习/UmiDvaTest/userForTest/zyqResp/src/models/example.js').default) });
app.model({ ...(require('D:/前端知识学习/UmiDvaTest/userForTest/zyqResp/src/pages/tree/models/usertree.js').default) });
app.model({ ...(require('D:/前端知识学习/UmiDvaTest/userForTest/zyqResp/src/pages/userPage/models/userpage.js').default) });
app.model({ ...(require('D:/前端知识学习/UmiDvaTest/userForTest/zyqResp/src/pages/users/models/users.js').default) });

class DvaContainer extends Component {
  render() {
    app.router(() => this.props.children);
    return app.start()();
  }
}

export default DvaContainer;
