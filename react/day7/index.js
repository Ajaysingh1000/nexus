import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/header";
import Body from "./component/body";




function App(){
    return(
        <>
        <Header/>
        <Body/>       
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);