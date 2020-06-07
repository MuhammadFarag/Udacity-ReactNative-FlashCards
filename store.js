import {combineReducers, createStore} from "redux";


function generateUID() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

function decksReducer(state = {}, action) {
  switch (action.type) {
    case "ADD_DECK":
      const id = generateUID()
      state = {
        ...state,
        [id]: action.deck
      }
      return state
    default:
      return state
  }
}

export function newDeck(name) {
  return {
    type: "ADD_DECK",
    deck: {name: name, cards: 0}
  }
}

export const store = createStore(combineReducers({decks: decksReducer}))