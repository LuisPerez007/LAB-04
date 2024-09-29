//import { List } from "./List"
export const WrapperList = (props) => {
    const { children } = props
    return(
        <div>
          <h2>LISTA DE COMPRAS</h2> 
          <div>
            {children}
          </div> 
        </div>       
    )
}