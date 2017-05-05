import React, { Component } from 'react'
import styles from './TodoForm.css'

export default class TodoForm extends Component {
  render () {
    return (
      <div className={styles.container}>
        <input
          className={styles.input}
          type='text'
          placeholder='What have you done?'
        />
      </div>
    )
  }
}
