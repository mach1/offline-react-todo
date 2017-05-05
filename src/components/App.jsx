import React from 'react'
import TodoForm from './TodoForm/TodoForm.jsx'
import TodoList from './TodoList/TodoList.jsx'
import styles from './App.css'

const App = () => (
  <div className={styles.app}>
    <h2 className={styles.heading}>todos</h2>
    <TodoForm />
    <TodoList />
  </div>
)

export default App
