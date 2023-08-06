import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import s from "./App.module.css";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {StateType, state, addPost} from './redux/state';
import {Route} from "react-router-dom";
import {Footer} from "./components/Footer/Footer";
import logo from "./img/logo-header.png"


export type HeaderLogoType = {
    logo: string
}
export const headerlogo: HeaderLogoType = {
    logo: logo
}
export type AppPropsType = {
    state: StateType
    addPost: (message: string)=>void
}

const App = (props: AppPropsType) => {

    return (
        <div className='app-wrapper'>
            <Header logo={headerlogo}/>
            <div>
                <nav className={s.nav}>
                    <Navbar title={"Profile"}/>
                </nav>
            </div>
            <div className={s.content}>
                <Route path='/profile' render={() => <Profile posts={props.state.profilePage} addPost={props.addPost}/>}/>
                <Route path='/dialogs' render={() => <Dialogs
                    dialogs={state.dialogsPage.dialogs}
                    messages={state.dialogsPage.messages}/>}/>
            </div>
            <Footer/>
        </div>

    )
}

export default App;
