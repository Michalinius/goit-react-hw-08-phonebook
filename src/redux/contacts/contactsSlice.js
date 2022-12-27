import { createSlice } from "@reduxjs/toolkit"
import { addContact, getContactsFromAPI, deleteContact } from "./operations";

const handlePending = state => { state.isLoading = true };

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
}

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
        filter: "",
    },
    reducers: {
        setFilter(state, action) {
            state.filter = action.payload;
        },
    },
    extraReducers: {
        [addContact.pending]: handlePending,
        [getContactsFromAPI.pending]: handlePending,
        [deleteContact.pending]: handlePending,
        [addContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = [...state.items, action.payload];
        },
        [getContactsFromAPI.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        [deleteContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = state.items.filter(contact => contact.id !== action.payload.id)
        },
        [addContact.rejected]: handleRejected,
        [getContactsFromAPI.rejected]: handleRejected,
        [deleteContact.rejected]: handleRejected,
    }
}
)

export const { setFilter } = contactsSlice.actions
export const contactsReducer = contactsSlice.reducer;
