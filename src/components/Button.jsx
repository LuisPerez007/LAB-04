import { useState } from "react";

export const Button = props => {
    const{ text } = props;

    function Contador() {
        const alerta = parseInt (Math.random() * 100) + 1;
            alert(alerta);
    }
    return(
        <button onClick={Contador}>
           {text}
        </button>
    )

}