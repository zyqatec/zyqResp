import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';
import { routerRedux } from 'dva/router';



let Router = DefaultRouter;
const { ConnectedRouter } = routerRedux;
Router = ConnectedRouter;


let routes = [
  {
    "path": "/",
    "component": require('../../layout/index.js').default,
    "routes": [
      {
        "path": "/grid",
        "exact": true,
        "component": require('../grid/page.js').default
      },
      {
        "path": "/",
        "exact": true,
        "component": require('../index.js').default
      },
      {
        "path": "/map",
        "exact": true,
        "component": require('../map/page.js').default
      },
      {
        "path": "/tree",
        "exact": true,
        "component": require('../tree/page.js').default
      },
      {
        "path": "/upload",
        "exact": true,
        "component": require('../upload/page.js').default
      },
      {
        "path": "/userPage",
        "exact": true,
        "component": require('../userPage/page.js').default
      },
      {
        "path": "/users",
        "exact": true,
        "component": require('../users/page.js').default
      },
      {
        "component": () => React.createElement(require('D:/前端知识学习/UmiDvaTest/userForTest/zyqResp/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', routes: '[{"path":"/","component":"./src\\\\layout\\\\index.js","routes":[{"path":"/grid","exact":true,"component":"./src/pages/grid/page.js"},{"path":"/","exact":true,"component":"./src/pages/index.js"},{"path":"/map","exact":true,"component":"./src/pages/map/page.js"},{"path":"/tree","exact":true,"component":"./src/pages/tree/page.js"},{"path":"/upload","exact":true,"component":"./src/pages/upload/page.js"},{"path":"/userPage","exact":true,"component":"./src/pages/userPage/page.js"},{"path":"/users","exact":true,"component":"./src/pages/users/page.js"}]}]' })
      }
    ]
  }
];


export default function() {
  return (
<Router history={window.g_history}>
  <Route render={({ location }) =>
    renderRoutes(routes, {}, { location })
  } />
</Router>
  );
}
