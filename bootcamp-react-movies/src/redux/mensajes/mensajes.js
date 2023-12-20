import { createSlice } from "@reduxjs/toolkit";

export const MensajeInitialState = {
    msj: '',
};

export const mensajesSlice = createSlice({
    name: 'mensaje',
    initialState: MensajeInitialState,
    reducers: {
        createMensajes: (state,action) => {
            return action.payload;
        },
        modifyMensajes: (state,action) => {
            return {...state, ...action.payload}
        },
        resetMensajes: () => {
            return MensajeInitialState;
        }
    }
});

export const {createMensajes,modifyMensajes, resetMensajes} = mensajesSlice.actions;