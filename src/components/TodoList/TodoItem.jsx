import React from 'react'
import PropTypes from 'prop-types'
import styles from './TodoItem.css'

const todoItem = ({ item }) => {
  return (
    <div className={styles.container}>
      {item.text}
    </div>
  )
}

todoItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default todoItem
