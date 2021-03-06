export const initialState ={
    idLoggedIn: false,
    me: null,
    signUpData:{},
    loginData:{}

}

export const loginAction = (data) =>{
    return{
        type: 'LOG_IN',
        data,
    }
}

export const logoutAction = () =>{
    return{
        type: 'LOG_OUT',

    }
}

    // reducer ; 이전 state + action  => 다음 state
const reducer = (state= initialState, action) =>{
    switch(action.type){
        case 'LOG_IN':
            return{
        
                ...state,
                isLoggedIn: true,
                me: action.data
                
                
            }

        case 'LOG_OUT':
            return{
 
           ...state,
            isLoggedIn: false,
            me: null
           
                    
        }
        default:
            return state;        
    }
};

export default reducer;