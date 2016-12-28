
export const SEARCH = 'react-icons-docs/search'
export const SELECT_LIB = 'react-icons-docs/selectLib'
export const SHOW_MENU = 'react-icons-docs/setShowMenu'

const initialState = {
  query: null,
  selectedLib: null,
  showMenu: false
}

export default function reducer (state = initialState, action = {}) {
  switch (action.type) {
    case SEARCH:
    case SELECT_LIB:
    case SHOW_MENU:
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

export function setShowMenu (showMenu) {
  return {
    type: SHOW_MENU,
    payload: { showMenu }
  }
}
