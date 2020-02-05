import React,{Component,Fragment} from  'react'
import ToItem from "./ToItem";
import axios from 'axios'
class TodoList extends Component {
    constructor(props){
        super(props);
        this.state= {
            inputValue: '',
            list: []

        }
 /*       this.addItem = this.addItem.bind(this),
        this.changeValue = this.changeValue.bind(this)*/
    }
    changeValue(e){
        this.setState({
            inputValue:e.target.value
        })
    }

    addItem(){
        const  value = this.state.inputValue

        this.setState((prevState) => {
            return{
                list:[...prevState.list,value]
            }
        })
 /*       this.setState({
            list:[...this.state.list,value]
        })*/
    }
    deleItem(index){
        const list = [...this.state.list]
        list.splice(index,1)
        this.setState(() =>({
            list
        }))
/*        this.setState({
            list:list
        })*/

    }
    getToItems(){
        return (this.state.list.map((item,index) =>{
            return (
                <ToItem
                    key = {index}
                    content={ item }
                    index={ index }
                    deleItems={ this.deleItem.bind(this) }/>)
        }))
    }
    componentWillMount() {
            console.log("componteWillMonnt")
    }

    render() {
            console.log("render")
        return (
            <Fragment>
                <div>
                    <input
                        value={this.state.inputValue}
                        onChange={this.changeValue.bind(this)}
                    />
                    <button onClick={this.addItem.bind(this)}>提交</button>
                </div>
                <ul>
                    {this.getToItems()}
                </ul>
            </Fragment>

        );
    }
    componentDidMount() {
      axios.get('/get/api/toList')
         .then(() =>{
          alert("hahahahhaha")
        }).catch(() =>{
            alert("erro")
        })
    }
}
export default TodoList