export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: new Date().getTime(),
  text
})
