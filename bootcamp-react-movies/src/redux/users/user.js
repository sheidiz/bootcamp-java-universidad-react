import { createSlice } from '@reduxjs/toolkit';

export const USER_KEY = 'user';

const getUserFromLocalStorage = (USER_KEY) => {
    let user = localStorage.getItem(USER_KEY);
    if(!user) {
        user = UserEmptyState;
    }else{
        user = JSON.parse(user);
    }

    return user;
}

const saveInLocalStorage = (key,value) => {
    localStorage.setItem(key,JSON.stringify(value));
}

/*estado inicial del user slice (dentro del store) */
const InitialState = getUserFromLocalStorage(USER_KEY);
const UserEmptyState = {
    name: '',
    email: '',
    surname: '',
    avatar: ''
};
//raname de variables

//crear una funcion
export const userSlice = createSlice(
    {
        name: "user",
        initialState: InitialState,
        reducers: {
            //action (el objeto action trae un payload)
            createUser: (state,action) => {
                //logica=reducer
                saveInLocalStorage(USER_KEY, action.payload);
                return action.payload; //lo que viene desde la view (ui/page) es lo que queda como user inicial
            },
            modifyUser: (state,action) => {
                const newState = {...state, ...action.payload};
                saveInLocalStorage(USER_KEY, newState);
                return newState;
            },  
            resetUser: (/*state,action*/) => {
                saveInLocalStorage(USER_KEY, UserEmptyState);
                return UserEmptyState;
            } 
        }
    }
);

export const {createUser, modifyUser, resetUser} = userSlice.actions;