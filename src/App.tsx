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



export type MessageTypeProps = {
    message: string
    id: number
}

export type DialogsPropsType = {
    name: string
    id: number
}

const App = () => {


    let [dialogs, setDialogs] = useState<DialogsPropsType[]>([
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Igor'},
        {id: 5, name: 'Sveta'},
        {id: 6, name: 'Viktor'},
    ])

    let [messages, setMessages] = useState<MessageTypeProps[]>([
        {id: 1, message: "hi"},
        {id: 2, message: "hi"},
        {id: 3, message: "hi"},
        {id: 4, message: "hi"},
        {id: 5, message: "hi"},
    ])


    const SomeComponent = () => <Dialogs dialogs={dialogs} messages={messages}/>

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
                    <Route path='/dialogs' component={SomeComponent}/>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/news' component={News}/>
                    <Route path='/mysposts' component={News}/>

                    <Route path='/dialogs' render={SomeComponent}/>
                </div>
            </div>

        </BrowserRouter>
    )
}
export default App;

