import './App.css'
import { Button } from './RandomComponent/Button'
import { ListaNombres } from './RandomComponent/ListaNombres'
import { CalculoArea } from './RandomComponent/CalculoArea'
import { Actualizando } from './CompWithProps/Actualizando'


function App() {
  return (
    <>
       <Button/>
       <ListaNombres/>
       <CalculoArea/>
       <Actualizando/>
    </>
  )
}

export default App