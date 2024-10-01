import { useState } from "react";

export const ListaNombres = () => {
    const[valor, setValor] = useState('');
    const[nombre, setNombre] = useState([]);

    const actualizacion = (e) =>{
        setValor(e.target.value);
    }
    function Lista(){
        setNombre([...nombre, valor]);
        
    }
    return(
        <div>
            <h1>LISTA DE NOMBRES INGRESADOS</h1>
            <input type="text" value={valor} onChange={actualizacion} placeholder="nombre"/>
            <button onClick={Lista}>AGREGAR_A_LA_LISTA</button>
            <ul>
                {nombre.map((n, index)=>(
                    <li key={index}>
                        {n}
                    </li>
                )
                )}
            </ul>
        </div>
    )
}