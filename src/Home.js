import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { makeNewDentist, makeNewAssistent, makeNewPatient } from "./redux/action";



function Home() {
    const dispatch = useDispatch()
    const loading = useSelector(state => state.Patient.IsLoading)
    // console.log(loading)
    return (

        <div>
            {loading ? "...Loading" : "Home!"}

            <button onClick={() => dispatch(makeNewDentist(        { name: "Pieter",
        surname: "Meijer",
        gender: "male",
        tel: "+31614357895",
        email:"p.meijer@tandartspraktijkbvt.nl"
            }))}>addDentist</button>
                        <button onClick={() => dispatch(makeNewAssistent(        { name: "Pieter",
        surname: "Meijer",
        gender: "male",
        tel: "+31614357895",
        email:"p.meijer@tandartspraktijkbvt.nl"
                        }))}>addAssistent</button>
                                    <button onClick={() => dispatch(makeNewPatient(        { name: "Pieter",
        surname: "Meijer",
        gender: "male",
        tel: "+31614357895",
        email:"p.meijer@tandartspraktijkbvt.nl"
        }))}>addPatient</button>
        </div>
    )
}


export default Home

