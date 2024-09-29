import './App.css'
import { WrapperList } from './components/WrapperList'
import { List } from './components/List'

function App() {

  return (
    <>
      <WrapperList>
        <List/>
      </WrapperList>  
      <WrapperList >
      <ul>
          <li>nose 1</li>
          <li>nose 2</li>
          <li>nose 3</li>
        </ul>
      </WrapperList>    
    </>
  )
}

export default App