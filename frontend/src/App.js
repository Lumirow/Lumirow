import './index.css';
import {useEffect} from "react";

import Header from "./pages/Header/Header";
import {Route, Routes} from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route index element={<Header />}/>

            </Routes>
        </div>
    );
}


/* Март милафка(by UniMas) */
export default App;
