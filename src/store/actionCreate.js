import {GET_INITACTION_SAGA,CHANGE_INPUT_VALUE,DELETE_ITEM,ADD_CHANGE_LIST,INIT_GETLIST} from "./actionTypes"
import axios from "axios"
export const getInputValueAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value:value
})
export const addChangeListAction = (value) => ({
    type: ADD_CHANGE_LIST,
    value
})
export const deletItemAction  = (index) =>({
    type:DELETE_ITEM,
    index:index
})
export const getinitListAction  = (data) =>({
    type:INIT_GETLIST,
    data:data
})
export const getinitList_saga_Action  = (data) =>({
    type:GET_INITACTION_SAGA,
    data:data
})
/*
export const  getinitListAction = () =>{
    return (dispatch) =>{
        axios.get('/list').then( (data) =>{
        }).catch(() =>{
            const data = ["11","xiaowu","zwz"]
            const action  = getinitList(data)
            dispatch(action)
        })
    }
}*/
