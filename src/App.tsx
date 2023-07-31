import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
//import Technologies from "./components/Technologies/Technologies";
//import Footer from "./components/Footer/Footer";
import logo from "./img/logo-header.png"
import Profile from "./components/Profile/Profile";
//import logo-main from "./img/img-main.jpg"
import classes from "./App.module.css";
import MyPosts from "./components/Profile/MyPosts/MyPosts";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";

export type HeaderLogoType = {
    logo: string
}
export const headerlogo: HeaderLogoType = {
    logo: logo
}
const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header logo={headerlogo}/>
                <div>
                    <nav className={classes.nav}>
                        <Navbar title={"Profile"}/>
                        <Navbar title={"Dialogs"}/>
                        <Navbar title={"News"}/>
                        <Navbar title={"Music"}/>
                        <Navbar title={"Settings"}/>
                        <Navbar title={"MyPosts"}/>

                    </nav>
                </div>
                <div className={classes.content}>
                    <Route path="/dialogs" component={Dialogs}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/news" component={News}/>
                </div>
            </div>
            )
        </BrowserRouter>
    )
}
export default App;

