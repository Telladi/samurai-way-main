import React from 'react';
import './App.css';
import Header from "./components/Header/Header";

const App = () => {
    return (
        <div>
            <Header titleValue={"Home"} />
            <Header titleValue={"News Feed"} />
            <Header titleValue={"Messages"} />

            <Technologies />
        </div>);
}

const Technologies = () => {
       return (
           <div>
               <ul>
                   <li>css</li>
                   <li>html</li>
                   <li>js</li>
                   <li>react</li>
               </ul>
           </div>
       )
}


export default App;

