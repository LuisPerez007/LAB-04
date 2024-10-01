import { useState } from "react";

export const Actualizando = () => {
    const[texto, setTexto] = useState('');
    return(
        <div>
            <h1>ESCRIBA EL TEXTO</h1>
            <input type="text" value={texto} onChange={(e)=>{
                setTexto(e.target.value);
            }} 
            placeholder="escriba el texto aqui.."
            />
            <h1>COPIANDO EL TEXTO EN TIEMPO REAL</h1>
            <h2>{texto}</h2>
        </div>

    )
}