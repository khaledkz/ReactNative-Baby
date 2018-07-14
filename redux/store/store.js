import { createStore } from 'redux'
 import rootReducer from './rootReducer'

// Note: this API requires redux@>=3.1.0
const store = createStore(
  rootReducer
)

export default store
