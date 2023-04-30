import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
//import Technologies from "./components/Technologies/Technologies";
//import Footer from "./components/Footer/Footer";
import logo from "./img/logo-header.png"
import Profile from "./components/Nav/Profile";
//import logo-main from "./img/img-main.jpg"
export type HeaderLogoType = {
    logo: string
}
export const headerlogo: HeaderLogoType = {
    logo: logo
}
const App = () => {
    return (
        <div className='app-wrapper'>
            <Header logo={headerlogo}/>

            <nav className="nav">
                <Navbar title={"Profile"}/>
                <Navbar title={"Messages"}/>
                <Navbar title={"News"}/>
                <Navbar title={"Music"}/>
                <Navbar title={"Settings"}/>
            </nav>
            <div className="content">
                <img
                    src="data:image/jpeg;base64,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"
                    alt=""/>
                <Profile title={"ava + description"}/>
                <Profile title={"My posts"}/>
                <Profile title={"New post"}/>
                <Profile title={"post 1"}/>
                <Profile title={"post 2"}/>
            </div>
        </div>);
}
export default App;

