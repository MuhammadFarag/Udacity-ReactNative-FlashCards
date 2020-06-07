import {applyMiddleware, combineReducers, createStore} from "redux";
import AsyncStorage from '@react-native-community/async-storage';
import thunk from 'redux-thunk';

function generateUID() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

function decksReducer(state = {}, action) {
  switch (action.type) {
    case "POPULATE_DATA":
      state = action.decks
      return state
    case "ADD_DECK":
      const id = generateUID()
      state = {
        ...state,
        [id]: {id: id, ...action.deck}
      }
      return state
    case "ADD_CARD":
      state[action.deckId].cards.push(action.card)
      return state
    default:
      return state
  }
}

export function newDeck(name) {
  return {
    type: "ADD_DECK",
    deck: {name: name, cards: []}
  }
}

export function addCard(deckId, question, answer) {
  return {
    type: "ADD_CARD",
    deckId: deckId,
    card: {
      question,
      answer
    }
  }
}

export function populateData(decks) {
  return {
    type: "POPULATE_DATA",
    decks: decks
  }

}


const STORAGE_KEY = "com.mfarag:Udacity.FlashCards3"

export function initialize() {
  return function (dispatch) {
    AsyncStorage.getItem(STORAGE_KEY)
      .then(item => JSON.parse(item))
      .then(data => {
        if (data) {
          dispatch(populateData(data.decks))
        }
      })
      .catch(error => {
        console.error("Error has occurrQuestioned:", error)
      })
  }
}

const persist = ({getState}) => next => async action => {
  const result = next(action)
  switch (action.type) {
    case "ADD_DECK":
    case "ADD_CARD":
      try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(getState()))
      } catch (e) {
        console.error(`${action.type} error: `, e)
      }
  }

  return result
}

const log = ({getState}) => next => action => {
  const result = next(action)
  console.log(`${action.type} current State:`, JSON.stringify(getState()));
  return result
}

export const store = createStore(combineReducers({decks: decksReducer}), applyMiddleware(log, thunk, persist))