import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from './users/user';
import { mensajesSlice } from "./mensajes/mensajes";

export const EcomerceStore = configureStore({
    reducer : {
        users: userSlice.reducer,
        mensajes: mensajesSlice.reducer
    }
});

export default EcomerceStore;