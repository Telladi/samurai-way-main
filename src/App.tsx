import React, {useState} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
//import Technologies from "./components/Technologies/Technologies";
//import Footer from "./components/Footer/Footer";
import logo from "./img/logo-header.png"
import Profile from "./components/Profile/Profile";
//import logo-main from "./img/img-main.jpg"
import classes from "./App.module.css";

import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import state from './redux/state';




export type HeaderLogoType = {
    logo: string
}
export const headerlogo: HeaderLogoType = {
    logo: logo
}


const App = () => {

let messagesData = state.dialogsPage.messages
let dialogsData = state.dialogsPage.dialogs
let postsData = state.profilePage.posts
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header logo={headerlogo}/>
                <div>
                    <nav className={classes.nav}>
                        <Navbar title={"Profile"}/>


                    </nav>
                </div>
                <div className={classes.content}>
                    {/*<Route path='/dialogs' component={SomeComponent}/>*/}
                    <Route path='/profile' render={()=> <Profile posts={postsData} title={"Profile"}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/mysposts' component={News}/>
                    <Route path='/dialogs' render={() => <Dialogs dialogs={dialogsData} messages={messagesData}/>}/>
                </div>
            </div>

        </BrowserRouter>
    )
}
export default App;

