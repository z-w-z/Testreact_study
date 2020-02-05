import React,{Component} from  'react'
import  {getinitList_saga_Action,getInputValueAction,addChangeListAction,deletItemAction} from './store/actionCreate'
import TodoListUI from './TodoListUI'
import store from './store/index'

class TodoListAntd extends Component {
    constructor(props){
        super(props);
        this.state = store.getState()
        store.subscribe(this.getChangeValue.bind(this))
        this.changeValue =  this.changeValue.bind(this)
        this.getAddChangeValue = this.getAddChangeValue.bind(this)
        this.deletItem = this.deletItem.bind(this)
    }
    getChangeValue(){
        this.setState(store.getState())
    }
    changeValue(e){
        const value = e.target.value;
        //新建一个action，
   /*     const action = {
            type:"change_input_value",
            value:value
        }*/
        //传给reduer
        store.dispatch(getInputValueAction(value))
    }
    getAddChangeValue(){
        const value = this.state.inputValue
   /*     const  action = {
            type:"add_change_list",
            value:value,
        }*/
        store.dispatch(addChangeListAction())
    }
    deletItem(index){
/*        const action = {
            type:'delete_item',
            index:index
        }*/
        store.dispatch(deletItemAction(index))
    }
    render() {
        return <TodoListUI
            inputValue ={this.state.inputValue}
            list = {this.state.list}
            changeValue = {this.changeValue}
            getAddChangeValue = {this.getAddChangeValue}
            deletItem = {this.deletItem}


        />
    }
    componentDidMount() {
        const action = getinitList_saga_Action()
        store.dispatch(action)

/*       //redux-thunk管理异步请求的方式
        const action = getinitListAction()
        store.dispatch(action)*/

/*        axios.get('/list').then( (res)=>{
            const data = res.data
            console.log("data")
            console.log(data)
        }).catch(()=>{
            const data = ["11","22","33"]
            const action  = getinitList(data)
            store.dispatch(action)
        })*/
    }
}
export default TodoListAntd