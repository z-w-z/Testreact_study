import React,{ Component } from 'react'
import {Input, Button ,List,Typography  } from 'antd';
import 'antd/dist/antd.css';
 class TodoListUI extends Component{
     render() {
         return (
             <div>
                 <div>
                     <Input
                         onChange={this.props.changeValue}
                         value={this.props.inputValue}
                         placeholder="Basic usage"
                         style={{width:"300px",marginRight:"10px"}} />
                     <Button  onClick={this.props.getAddChangeValue} type="primary">提交</Button>
                 </div>
                 <List
                     style={{width:'300px',marginTop:'10px'}}
                     bordered
                     dataSource={this.props.list}
                     renderItem={(item,index) => (
                         <List.Item onClick={(index) => {
                             this.props.deletItem(index)
                         }}>
                             <Typography.Text mark>wuwuwu</Typography.Text> {item}
                         </List.Item>
                     )}
                 />
             </div>
         )
     }

 }
 export default TodoListUI