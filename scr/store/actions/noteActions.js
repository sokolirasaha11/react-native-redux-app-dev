// In this file, we create actions that will change the redux and will be called in the pages of the application.
import { ADD_NOTE, DELETE_NOTE, EDIT_NOTE, ADD_FAVORITES_NOTE, DELETE_FAVORITES_NOTE } from "../type";
// The action that creates the note
export const addNote = infoNewNote => dispatch => {
    dispatch ({
        type: ADD_NOTE,
        payload: infoNewNote, // infoNewNote - An array that contains all the information for the post
    })
}
// Action that deletes a note
export const dellNote = (id) => {
    return {
        type: DELETE_NOTE,
        payload: id,
    }
}
// Action that edits the note
export const editNote = (newInfoNote) => {
    return {
        type: EDIT_NOTE,
        payload: newInfoNote, // newInfoNote - An array that contains all the information for the post
    }
}
// Action that adds a note to favorites
export const addFavorites = (id) => {
    return {
        type: ADD_FAVORITES_NOTE,
        payload: id
    }
}
// Action that removes a note from favorites
export const dellFavorites = (id) => {
    return {
        type: DELETE_FAVORITES_NOTE,
        payload: id
    }
}