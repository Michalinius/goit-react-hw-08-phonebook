import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import thunk from "redux-thunk";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

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

// export const registerUser = async (requestData) => {
//     const response = await axios.post("https://connections-api.herokuapp.com/users/signup", requestData)
//     return response.data;
// }

// export const registerUser = createAsyncThunk("contacts/registerUser",
//     async (requestData, thunkAPI) => {
//         try {
//             const response = await axios.post("https://connections-api.herokuapp.com/users/signup", requestData);
//             return response.data;
//         } catch (e) {
//             return thunkAPI.rejectWithValue(e.message);
//         }
//     }
// )