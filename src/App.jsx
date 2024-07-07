import { useContext, useState } from 'react'
import './App.css'
import CocktailContext from './App/CocktailContext'
import SearchForm from './Components/SearchForm'
import CocktailList from './Components/CocktailList'
import Loading from './Components/Loading'

function App() {
  const [count, setCount] = useState(0)
  const {searchTerm}=useContext(CocktailContext)

  return (
    <>
    <h1>{searchTerm}</h1>
      <SearchForm/>
      <CocktailList/>
      <Loading/>
    </>
  )
}

export default App
