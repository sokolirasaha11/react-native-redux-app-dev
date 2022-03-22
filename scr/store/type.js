// This file stores the types that we use in redux actions.
export const ADD_NOTE = 'ADD_NOTE' // Type for adding notes
export const DELETE_NOTE = 'DELETE_NOTE' // Type to delete notes

export const EDIT_NOTE = 'EDIT_NOTE' // Type to change notes

export const ADD_FAVORITES_NOTE = 'ADD_FAVORITES_NOTE' // Type to add notes to favorites
export const DELETE_FAVORITES_NOTE = 'DELETE_FAVORITES_NOTE' // Type to remove notes from favorites

/* Why did we separate edit and add/remove favorites?
This is done because, the change constant will be tied to the transfer of a 
large number of information in which the flag of the chosen one will not change. */