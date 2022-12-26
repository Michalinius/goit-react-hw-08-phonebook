import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import thunk from "redux-thunk";

axios.defaults.baseURL = "https://63a98a6b7d7edb3ae6105ad3.mockapi.io";

export const addContact = createAsyncThunk("contacts/addContact",
    async (newContact, thunkAPI) => {
        try {
            const response = await axios.post("/contacts", newContact);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const getContactsFromAPI = createAsyncThunk("contacts/getContact",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/contacts");
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const deleteContact = createAsyncThunk("contacts/deleteContact",
    async (contactID, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${contactID}`);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)