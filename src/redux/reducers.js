import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, setFilter } from "./actions";

let contactsInitialState = [];
const savedData = localStorage.getItem("contacts")
if (savedData) contactsInitialState = JSON.parse(savedData);
const filterInitialState = "";

export const contactsReducer = createReducer(contactsInitialState, {
    [addContact]: (state, action) => {
        state = [...state, action.payload]
        localStorage.setItem("contacts", JSON.stringify(state))
        return state
    },
    [deleteContact]: (state, action) => {
        state = state.filter(contact => contact.id !== action.payload)
        localStorage.setItem("contacts", JSON.stringify(state))
        return state
    },
})

export const filterReducer = createReducer(filterInitialState, {
    [setFilter]: (state, action) => (state = action.payload)
})