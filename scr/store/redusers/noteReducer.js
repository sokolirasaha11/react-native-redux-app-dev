/* Our post format is as follows:
- id
- header
- date of change
- text
- favorites
There are ideas to include pictures in the text, change the color of the text and its background. 
Changing the font size and the font itself. 
If you have such ideas, then think in advance how it will look in your store.*/

import { ADD_NOTE, DELETE_NOTE, EDIT_NOTE, ADD_FAVORITES_NOTE, DELETE_FAVORITES_NOTE } from "../type";

// this is our original state.
const initalState = {
    note: [],
}
/* This is a function that returns new states to us. 
Please note that we do not mutate our states, but create new ones referring to the old ones. */
export const noteReduser = (state = initalState, action) => {
    switch (action.type) {
        case ADD_NOTE: return {
            ...state,
            note: [{ ...action.payload }, ...state]
        }
        case DELETE_NOTE: return {
            ...state,
            note: state.note.filter(n => n.id !== action.payload)
        }
        case EDIT_NOTE:
            const edit_note = state.note.map(n => {
                if (note.id === action.payload.id) {
                    n.header = action.payload.header
                    n.date = action.payload.date
                    n.text = action.payload.text
                    n.favorites = action.payload.favorites
                }
                return n
            })
            return {
                ...state, note
            }
        case ADD_FAVORITES_NOTE:
            const fav_add_note = state.note.map(n => {
                if (note.id === action.payload) {
                    n.favorites = true
                }
                return n
            })
            return {
                ...state, note
            }
        case DELETE_FAVORITES_NOTE:
            const fav_dell_note = state.note.map(n => {
                if (note.id === action.payload) {
                    n.favorites = false
                }
                return n
            })
            return {
                ...state, note
            }
        default: return state
    }
}