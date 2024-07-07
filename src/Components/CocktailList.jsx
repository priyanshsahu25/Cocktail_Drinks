import React from 'react'
import CocktailContex from '../App/CocktailContext'

import  { useContext } from 'react'
import Card from './Card'

const CocktailList = () => {
  const{ searchTerm,Loading,cocktails,setSearchTerm,setCocktails,setLoading,noCocktails, setNoCocktails} =useContext(CocktailContex);

  return (
    <>
{!noCocktails && <h2>Varities of Cocktail</h2>}

{
  cocktails.map((data)=>(
    <Card key={data.id} img={data}  />
  ))
}
    </>
  )
}

export default CocktailList