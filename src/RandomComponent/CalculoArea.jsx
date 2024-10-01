import { useState } from "react";

export const CalculoArea =() =>{
    const[base, setBase] = useState('');
    const[base1, setBase1] = useState('');
    const[altura, setAltura] = useState('');
    const[radio, setRadio] = useState('');
    const[total, setTotal] = useState(0);
    const[total2, setTotal2] = useState(0);
    const[total3, setTotal3] = useState(0);
    function areaCirculo (){
                setTotal(Math.PI*radio*radio);
    }
    function areaCuadrado(){
        setTotal2(base*base);
    }
    function areaRectangulo(){
        setTotal3(base1 * altura);
    }
    return(
        <div>
            <h1>AREA DEL OBJETO</h1>
            <h1>CIRCULO</h1>
            <input type="number" value={radio} onChange={(e)=>(setRadio(e.target.value))} placeholder="radio" />
            <h3>su area del circulo:{()=>{
                setRadio(parseInt(radio));
            }}
            <button onClick={areaCirculo}>CIRCULO</button>
            {total}
            </h3>
            <h1>cuadrado</h1>
                <input type="number" value={base} onChange={(e)=>{
                    setBase(e.target.value);
                }} placeholder="lado" />
            <h3>    
                {()=>{
                    setBase(parseInt(base));
                }}
                <button onClick={areaCuadrado}> CUADRADO :{total2}</button>

            </h3>
            <h2>rectangulo</h2>
                <input type="number" value={base1} onChange={(e)=>{
                    setBase1(e.target.value)
                }} placeholder="base"/>
                <input type="number" value={altura} onChange={(e)=>{
                    setAltura(e.target.value)
                }} 
                placeholder="altura"
                />
            <h2> area de : {()=>{
                setAltura(parseInt(altura));
                setBase(parseInt(base));
            }}
            <button onClick={areaRectangulo}>rectangulo</button>
            {total3}
            </h2>
        </div>
    )
}