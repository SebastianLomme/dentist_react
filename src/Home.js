import React from "react";
import "./App.css";
import { useSelector } from "react-redux";


function Home() {
    const loading = useSelector(state => state.Patient.IsLoading)
    console.log(loading)
    return (
        
        <div>{loading ? "...Loading" : "Home!"}</div>
    )
}


export default Home

