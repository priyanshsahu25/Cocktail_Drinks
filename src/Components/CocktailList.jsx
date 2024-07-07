import React, { useEffect } from 'react'
import CocktailContex from '../App/CocktailContext'

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
};

import  { useContext } from 'react'
import Card from './Card'

const CocktailList = () => {
  const{ searchTerm,Loading,cocktails,setSearchTerm,setCocktails,setLoading,noCocktails, setNoCocktails} =useContext(CocktailContex);

 

  return (
    <>
{!noCocktails && <h1 style={{'textAlign':'center'}}>Varities of Cocktail</h1>}
<div style={containerStyle}>
      {cocktails.map((data) => (
        <Card key={data.idDrink} {...data} />
      ))}
    </div>
    </>
  )
}

export default CocktailList