import './index.css'
import {Component} from 'react'
import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here
class SimpleTodos extends Component {
  state = {
    toDoItemsList: initialTodosList,
  }

  deleteToDo = id => {
    const {toDoItemsList} = this.state
    const newToDoList = toDoItemsList.filter(eachToDo => eachToDo.id !== id)
    this.setState({toDoItemsList: newToDoList})
  }

  render() {
    const {toDoItemsList} = this.state
    return (
      <div className="app-container">
        <div className="todo-card-container">
          <h1 className="heading">Simple Todos</h1>
          <ul className="todo-items-container">
            {toDoItemsList.map(eachItem => (
              <TodoItem
                key={eachItem.id}
                todoInfo={eachItem}
                deleteToDo={this.deleteToDo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
