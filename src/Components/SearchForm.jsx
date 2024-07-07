import React, { useContext,useEffect,useState } from 'react'
import CocktailContext from '../App/CocktailContext'

const SearchForm = () => {
  
  const{ searchTerm,Loading,cocktails,setSearchTerm,setCocktails,setLoading,noCocktails, setNoCocktails} =useContext(CocktailContext);


useEffect (()=>{
  if(cocktails.length===0){
    return setNoCocktails(true)
  }
  setNoCocktails(false);

},[searchTerm,cocktails])

  return (
    <>
    <form onSubmit={(e)=>(e.preventDefault())}>
      <input type='text' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
    { noCocktails && <h1>No cocktails found </h1>}
    </form>
    </>
  )
}

export default SearchForm