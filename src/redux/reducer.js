
export const SEARCH = 'react-icons-docs/search'
export const SELECT_LIB = 'react-icons-docs/selectLib'

const initialState = {
  query: null,
  selectedLib: 'font-awesome'
}

export default function reducer (state = initialState, action = {}) {
  switch (action.type) {
    case SEARCH:
    case SELECT_LIB:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

export function search (query) {
  return {
    type: SEARCH,
    payload: { query }
  }
}

export function selectLib (selectedLib) {
  return {
    type: SELECT_LIB,
    payload: { selectedLib }
  }
}
