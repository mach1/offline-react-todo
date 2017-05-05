import { compose, createStore } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import localForage from 'localforage'
import reducer from './reducers'

const configureStore = () => {
  const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    compose(
      autoRehydrate()
    )
  )

  persistStore(store, { storage: localForage })
  return store
}

export default configureStore
