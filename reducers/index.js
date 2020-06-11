
const initialState = {
    name:'zerocho',
    age:27,
    password:'babo',

}

const changeNickname = {
    type:'CHANGE_NICKNAME',
    data:'boogicho'
}


// 모든 액션을 미리 만들어 놓는 것은 불가능하다. 
//동적으로 액션을 만들자
// => action creator
const changeNickname = (data) =>{
    return {
        type: 'CHANGE_NICKNAME',
        data,
    }
}

changeNickname('boogicho');
//{
//     type:'CHANGE_NICKNAME',
//     data: ' neue zeal'

// }
store.dispatch(changeNickname('mighty tak'))



// reducer 
// : 이전 상태와 액션을 통해서 다음 상태를 만들어낸다. 
// 

const rootReducer = (state = initialState,action)=>{

    switch(action.type){
        case 'CHANGE_NICKNAME':
            return{
                // 이런식으로 해야 history가 남는다. 
                // name만 바꿔주고 나머지 것들은 그대로 남겨둔다. 
                ...state,
                name: action.data,
            }

    }

};

export default rootReducer;