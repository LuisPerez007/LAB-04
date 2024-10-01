import { useState } from "react";

export const Button = () =>{
    const [numero, setNumero] = useState('');
    const [contador, setContador] = useState(0);

    const actualizacion = (e) => {
        setNumero(e.target.value);

    };

    function Sumador(){
            var aux = 0;
            var num = parseInt(numero, 10);
            for(var i=0;i<=num;i++){
                aux+=i;
            }
            setContador(aux);
    };
    return(
        <div>
            <h1>SUMATORIA DE NUMEROS</h1>
            <input type="number" value={numero} onChange={actualizacion} placeholder="ingresa numero entero"/>
            <button onClick={Sumador}>sumar</button>
            <h1>la suma es: {contador}</h1>
        </div>
    )

}
