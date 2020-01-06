import * as usersService from '../services/usertree';

// 首先我们根据 url 访问相关的 Route-Component，在组件中我们通过 dispatch 发送 action 到 model 里面的 effect 或者直接 Reducer

// 当我们将action发送给Effect，基本上是取服务器上面请求数据的，服务器返回数据之后，effect 会发送相应的 action 给 reducer，由唯一能改变 state 的 reducer 改变 state ，然后通过connect重新渲染组件。

// 当我们将action发送给reducer，那直接由 reducer 改变 state，然后通过 connect 重新渲染组件。


export default {
  namespace: 'usertree',
  state: {
    list: [],
    currentId:null,
  },
  reducers: {
    updateState(state,{payload:{data:list}}) {     
      return { ...state, list };
    },
    loadCurrentId(state,{payload:{currentId}}){
      //console.log(currentId);   
      return {...state,currentId};
    },
  },
  effects: {
    *showInTree({ payload}, { call, put }) {
      const { data } = yield call(usersService.showInTree);
      yield put({
        type: 'updateState',
        payload: {
          data,
        }
      });

    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/tree') {
          dispatch({
            type: 'showInTree',
          })
        }      
      })

    },
  },



}

