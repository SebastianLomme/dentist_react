import React, {useState} from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { makeNewDentist, makeNewAssistent, makeNewPatient, setToSick } from "./redux/action";



function Home() {
    const dispatch = useDispatch()
    const loading = useSelector(state => state.Patient.IsLoading)
    const [input, setInput] = useState({
        name: "",
        surname: "",
        tel: "",
        email: "",
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(input)
    }
    const handleChange = (e) => {
        const { name, value } = e.target
        setInput({
            ...input,
            [name]: value,
        })
        console.log(input)
    }
    return (

        <div>
            {loading ? "...Loading" : "Home!"}

            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="name" placeholder="Patientname" onChange={handleChange} />
                <input type="text" name="surname" id="surname" placeholder="surname" onChange={handleChange} />
                <input type="tel" name="tel" id="tel" placeholder="telnr" onChange={handleChange} />
                <input type="email" name="email" id="email" placeholder="email" onChange={handleChange }/>
                <button type="submit">add patient</button>

            </form>

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
                                                <button onClick={() => dispatch(setToSick("Carlijn Bos"))}>setSick</button>
        </div>
    )
}


export default Home

