import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";



const reducers = combineReducers( {
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

export const store = createStore(reducers)

export type AppRootStateType = ReturnType<typeof reducers>


// @ts-ignore

window.store = store