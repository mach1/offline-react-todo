import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addTodo } from '../../actions/TodoActions.js'
import styles from './TodoForm.css'

const ENTER = 13

class TodoForm extends Component {
  constructor (props) {
    super(props)

    this._refs = {}
    this.onInputKeyDown = this.onInputKeyDown.bind(this)
  }

  onInputKeyDown (e) {
    const { onAddTodo } = this.props
    const text = this._refs.input.value

    if (e.keyCode === ENTER) {
      onAddTodo(text)
      console.log(text)
    }
  }

  render () {
    return (
      <div className={styles.container}>
        <input
          ref={(ref) => { this._refs.input = ref }}
          className={styles.input}
          type='text'
          placeholder='What have you done?'
          onKeyDown={this.onInputKeyDown}
        />
      </div>
    )
  }
}

TodoForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddTodo: bindActionCreators(addTodo, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(TodoForm)
