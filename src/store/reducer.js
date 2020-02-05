import {GET_INITACTION_SAGA,CHANGE_INPUT_VALUE,DELETE_ITEM,ADD_CHANGE_LIST,INIT_GETLIST} from "./actionTypes"
const  defaultState = {
    inputValue: '123',
    list: [1,2,3]
}
export default (state = defaultState,action) =>{
    //console.log(state,action)
   if(action.type ==CHANGE_INPUT_VALUE){
       const newState = JSON.parse(JSON.stringify(state))
       newState.inputValue = action.value;
       return newState;
   }
   if(action.type == ADD_CHANGE_LIST){
       const newValue = JSON.parse(JSON.stringify(state))
       newValue.list.push(newValue.inputValue)
       newValue.inputValue ='';
       return newValue

   }
    if(action.type == DELETE_ITEM){
        const newValue = JSON.parse(JSON.stringify(state))
        newValue.list.splice(action.index,1)
        return newValue

    }
    if(action.type == INIT_GETLIST){
        const newValue = JSON.parse(JSON.stringify(state))
        newValue.list = action.data
        return newValue

    }
    if(action.type == GET_INITACTION_SAGA){
        const newValue = JSON.parse(JSON.stringify(state))
        newValue.list = action.data
        return newValue

    }
    return state
}