export default {
    namespace:'users',
    state:{
        usersList:[
            {id:1,name:'Zsy',number:2435},
            {id:2,name:'Zyq',number:258777},
            {id:3,name:'Jd',number:45352}
        ],
    },
    reducers:{
        updateState(state,action){ 
         return {...state,...action.payload}
        },
        createUsers(state,{payload:currentUser}){
         let currentUserList=deepClone(state);
         currentUserList.usersList.push(currentUser);
         console.log(currentUserList);         
         return currentUserList;
        },
        deleteUsers(state,{payload:index}){
          let currentUserList=deepClone(state);
          currentUserList.usersList.splice(index,1);
          console.log(currentUserList);         
          return currentUserList;
        },

    },
    subscriptions: {
        setup({ dispatch, history }) {
          return history.listen(({pathname})=>{
            if(pathname==='/users'){
              dispatch({
                type:'updateState',         
              })
            }
          })
            
        },
      },
    
      effects: {
        *fetch({ payload:currentUser }, {put}) {     
          yield put({ type: 'updateState',payload:currentUser});          
        },
      },

    }

    function deepClone(arr){
      let _obj=JSON.stringify(arr),
      objClone=JSON.parse(_obj);    
      return objClone;
  }