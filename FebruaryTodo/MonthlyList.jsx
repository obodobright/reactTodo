import React, { Component } from 'react';
import MonthlyTodo from "./MonthlyTodo"
import Header from './header/TodoHeader'
import NewTodo from './header/NewTodo'
import './todo.css'
class MonthlyList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            february : [{
                id : 1,
                title:  'Study React',
                completed :false,
                time: '9-12'
            },
            {
                id :2,
                title:  'Start my IT Product Assistant Training',
                completed : false,
                time: '12-2'
            },
            {
                id : 3,
                title:  'Read Bible and Pray',
                completed : false,
                time: '2-3'
            },
            {
                id : 4,
                title:  'Koko work',
                completed : false,
                time: '3-6'
            }]
         }
    }

    checkCompleted = (id) => {
       this.setState ({
           february : this.state.february.map((todo =>{
               if(todo.id === id){
                    todo.completed = !todo.completed
               }
               return todo
           }))
       })
    }

     deleteList = (id) => {
      this.setState({
          february : [...this.state.february.filter(todo => todo.id !== id)]
      })
    }
NewTodo = (title) => {
const newTodo = {
    id : 5,
    title:  title,
    completed : false,
    time: '9-12'
}
this.setState({
    february : [...this.state.february, newTodo]
})
}

    render() { 
        const februarySchedule = this.state.february.map(todo => <MonthlyTodo key={todo.id} id ={todo.id} title={todo.title} completed={todo.completed} time={todo.time} checkCompleted = {this.checkCompleted} deleteList = {this.deleteList}/>) 
        return ( 
            <section>
            <body>
                <Header />
                <NewTodo todo={this.NewTodo}/>
                {februarySchedule}
            </body>
            </section>
         );
    }
}
 
export default MonthlyList;