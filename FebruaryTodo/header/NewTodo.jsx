import React, { Component } from 'react';

class NewTodo extends Component {
    state = { 
        value : ''
     }

changeValue = (event) =>{
    event.preventDefault()
    this.setState({
        value : event.target.value
    })
}
submit = (event) => {
event.preventDefault()
    this.props.todo(this.state.value)
    this.setState({
        title : ''
    })
}

    render() { 
        return ( 
            <form onSubmit={this.submit} style={{display: 'flex', marginBottom:'6px', }}>
                <input type="search" placeholder="Add new todo..." style={searchStyle} value={this.state.value} onChange={this.changeValue}/>
                <input type="submit"  style={submitStyle} />
            </form>
         );
    }
}
const searchStyle = {
 flex: 10,
 padding: '6px',
 outline:"none",
border: '1px solid red'

}
const submitStyle = {
    flex: 1,
    padding: '3px 6px',
    outline : 'none',
    border : 'none',
    color : '#fff',
    background: '#ff0000'
}
 
export default NewTodo;