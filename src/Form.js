import React from "react";

export default function Form(props) {
    const { handleChange, handleSubmit, button, input } = props
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Voornaam: </label>
            <input type="text" name="name" id="name" onChange={handleChange} value={input.name} />
            <label htmlFor="surname">Achternaam: </label>
            <input
                type="text"
                name="surname"
                id="surname"
                onChange={handleChange}
                value={input.surname}
            />
            <label htmlFor="tel">Telephonenummer: </label>
            <input type="tel" name="tel" id="tel" onChange={handleChange} value={input.tel} />
            <label htmlFor="email">Emailadress: </label>
            <input type="email" name="email" id="email" onChange={handleChange} value={input.email} />
            <label htmlFor="date_birth">Geboortejaar: </label>
            <input
                type="number"
                name="date_birth"
                id="date_birth"
                min="1950"
                max="2021"
                onChange={handleChange}
                value={input.date_birth}
            />
            <div>
                <label htmlFor="gender" value={input.gender} >
                    <input
                        type="radio"
                        name="gender"
                        id={`male ${button}`}
                        value="male"
                        checked={input.gender === "male"}
                        onChange={handleChange}
                    />

                    <label
                        htmlFor={`male ${button}`}>male: </label>
                    <input
                        type="radio"
                        name="gender"
                        id={`female ${button}`}
                        value="female"
                        checked={input.gender === "female"}
                        onChange={handleChange}
                    />
                    <label htmlFor={`female ${button}`}>female: </label>

                    <input
                        type="radio"
                        name="gender"
                        id={`Non-binary ${button}`}
                        value="Non-binary"
                        checked={input.gender === "Non-binary"}
                        onChange={handleChange}
                    />
                    <label htmlFor={`Non-binary ${button}`}>Non-binary: </label>
                </label>
            </div>
            <button type="submit"> {button} </button>
        </form>
    )
}