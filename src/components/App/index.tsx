import React from 'react';
import AppBarCustom from "./AppBar/";
import './App.css';
import Preloader from "../Preloader";

function App() {
    return (
        <div className="App">
            <AppBarCustom title={'Приложения'}>
                Centered element

            </AppBarCustom>
            <Preloader/>
        </div>
    );
}

export default App;
