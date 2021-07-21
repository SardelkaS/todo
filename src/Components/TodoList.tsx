import React from 'react'
import { iTodo } from '../Interfaces'

type TodosListProps = {
    todos: iTodo[]
    onToggle(id: number): void
    onRemove(id: number): void
}


export const TodoList: React.FC<TodosListProps> = ({todos, onRemove, onToggle}) => {

    return (<>
        <ul>
            {todos.map(todo => {
                const classes = ['todo']
                if (todo.completed) {
                    classes.push('completed')
                }
                return (
                    <li className={classes.join(' ')} key={todo.id}>
                        <label>
                            <input type = 'checkbox' checked={todo.completed} onChange = {() => onToggle(todo.id)} />
                            <span>{todo.title}</span>
                            <i className='material-icons red-text' onClick = {() => onRemove(todo.id)}>delete</i>
                        </label>
                    </li>
                )
            })}
        </ul>
        <p className='center'><span>{todos.length}</span> item left</p>
        </>
    )
}