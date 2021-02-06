import {
    LOGIN_USER, REGISTER_USER
}from '../_actions/types';

export default function (state={}, action){
    switch (action.type){ // 바뀌어도 사용 할수 있도록 사용
        case value:
            return {...state, loginSuccess: action.payload}
            break;
        case REGISTER_USER:
            return { ...state, register : action.payload}
            break;
        default:
            return state ;
    }
    

}