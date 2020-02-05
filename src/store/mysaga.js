import {takeEvery,put } from 'redux-saga/effects'
import {GET_INITACTION_SAGA} from "./actionTypes"
import {getinitList_saga_Action} from "./actionCreate"
import axios from 'axios'

 function* getinitlistSaga() {
    try {
        const res = yield  axios.get('/list')
        console.log(res)
        const action  = getinitList_saga_Action(res.data)
        yield put(action)
    }catch (e) {
        console.log(e)
    /*    const data = ["11","xiaowu","zwz"]
        const action  = getinitList_saga_Action(data)
        yield put(action)*/
    }
   /*  const data = ["11","xiaowu","zwz"]
     const action  = getinitList_saga_Action(data)
     yield put(action)*/

}
//generate 函数
function* mySaga() {
    yield takeEvery(GET_INITACTION_SAGA,getinitlistSaga )
}

export default mySaga;