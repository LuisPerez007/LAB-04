import { useState } from "react";

export const Button = props => {
    const [count, setCount] = useState(0);
    const { mm } = props;

    function countButton() {
        setCount(count + 1);
    }
    return (
        <button onClick={countButton}>
           {mm} {count}
        </button>
    )

}