import React from 'react';
import AppBarCustom from "./AppBar/";
import './App.css';
import Preloader from "../ui/Preloader";

function App() {
    return (
        <div className="App">
            <AppBarCustom title={'Приложения'}>
                Centered element

            </AppBarCustom>
            <Preloader weight={10} size={100}/>
        </div>
    );
}

export default App;
