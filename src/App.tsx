import React, { useState, useEffect } from 'react';
// import { Navbar } from './Components/FileNav'
import { InputTask } from './Components/InputTask';
import { TodoList } from './Components/TodoList';
import { iTodo } from './Interfaces';

const App: React.FC = () => {

  const [todos, SetTodos] = useState<iTodo[]>([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as iTodo[]
    SetTodos(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const AddTodo = (title: string) => {
    const newTodo: iTodo = {
      title: title,
      id: Date.now(),
      completed: false
    }
    SetTodos(prev => [newTodo, ...prev])
  }

  const toggleHandler = (id: number) => {
    SetTodos(prev => prev.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }))
  }

  const removeHandler = (id: number) => {
    SetTodos(prev => prev.filter(todo => todo.id !== id))
  }

  return <>
    <div className='container'>
      <InputTask onAdd = {AddTodo}/>
      <TodoList todos = {todos} onRemove = {removeHandler} onToggle = {toggleHandler} />
    </div>
    </>
}

export default App;
