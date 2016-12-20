
import reducer from './reducer'
import { createStore } from 'redux'

export default initialState => {
  // const enhancer = compose(
  //   applyMiddleware(awaitMiddleware)
  // )
  return createStore(reducer, initialState)
}
