import React from "react";

function OptionInput(props) {
    return (
        <option value={props.id}>{props.value}</option>
    )
}

export default OptionInput