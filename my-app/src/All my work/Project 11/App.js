import React,{Fragment,useEffect } from 'react';
import "./App.css";
import SearchBar from "./SearchBar";
import Logs from "./logs";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import AddBtn from "./addBtn";
import AddLogModal from "./addLogModal";
import EditLogModal from "./EditLogModal";
import AddTechModal from "./AddTechModal";
import TechListModal from "./TechListModal";
import {Provider} from "react-redux";
import store from "./store";


const App = () =>  {
    
    useEffect(() => {
       
        M.AutoInit()
    });

        return ( 
            <Provider store={store}>
            <Fragment>
                
                <SearchBar />
                <div className="container">
                    <Logs />
                    <AddBtn />
                    <AddLogModal />
                    <EditLogModal />
                    <AddTechModal />
                    <TechListModal />
                </div>
            </Fragment>
            </Provider>
            
        )
    
}

export default App;