import {
    LOGIN_USER
}from '../_actions/types';

export default function (state={}, action){
    switch (action.type){ // 바뀌어도 사용 할수 있도록 사용
        case value:
            return {...state, loginSuccess: action.payload}
            break;
        default:
            return state ;
    }

}