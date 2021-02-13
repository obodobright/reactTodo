import React, { Component } from 'react';


class MonthlyTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    styleTodoTitle = () =>{
return {
    padding :'10px',
    border : '1px solid black',
    textTransform : this.props.completed ? 'uppercase' : 'none',
    fontWeight: this.props.completed ? 'bold' : 'normal' 
}
    }
    
   
    
    
    render() { 
        return ( 
            <section>
            <div>
            
                <p style={this.styleTodoTitle()}>
                <input type="checkbox" onChange={this.props.checkCompleted.bind(this, this.props.id)}/> { '' }
                    {this.props.title} 
                    <button style={styleButton} onClick =  { this.props.deleteList.bind(this, this.props.id)}>X</button>
                </p>
                
            </div>
            
            </section>
         );
    }

}

const styleButton ={
    outline: 'none',
    border : 'none',
    padding : '4px 9px',

    float:'right',
    background: 'red',
    color:'white',
    borderRadius: '50%',
    cursor : 'pointer'
}

 
export default MonthlyTodo;