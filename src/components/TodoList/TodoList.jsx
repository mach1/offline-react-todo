import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TodoItem from './TodoItem.jsx'
import styles from './TodoList.css'

class TodoList extends PureComponent {
  render () {
    const { todos } = this.props

    return (
      <div className={styles.container}>
        {todos.map((todo) => {
          return <TodoItem item={todo} key={todo.id} />
        })}
      </div>
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(TodoList)
