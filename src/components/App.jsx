import React from 'react'
import TodoForm from './TodoForm/TodoForm.jsx'
import styles from './App.css'

const App = () => (
  <div className={styles.app}>
    <h2 className={styles.heading}>todos</h2>
    <TodoForm />
  </div>
)

export default App
