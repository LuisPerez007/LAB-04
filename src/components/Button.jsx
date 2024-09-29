import { useState } from "react";

export const Button = props => {
    const[inicial, setInicial] = useState(0);
    const{ text } = props;

    function Contador() {
            setInicial(inicial + 5);
    }
    return(
        <button onClick={Contador}>
           {text} {inicial}
        </button>
    )

}