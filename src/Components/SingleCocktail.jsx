import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useContext } from 'react';
import CocktailContext from '../App/CocktailContext';

const SingleCocktail = () => {
  const { id } = useParams();
  const [drink, setDrink] = useState({});
  const { cocktails } = useContext(CocktailContext);

  useEffect(() => {
    const selectedDrink = cocktails.find((data) => data.idDrink === id);
    if (selectedDrink) {
      setDrink(selectedDrink);
    }
  }, [id, cocktails]);

  const {
    strDrinkThumb,
    strDrink,
    strGlass,
    strAlcoholic,
    strIngredient1,
    strIngredient2,
    strIngredient3,
  } = drink;

  return (
    <div
      style={{
        maxWidth: '600px',
        margin: '20px auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '28px', marginBottom: '10px' }}>{strDrink}</h1>
      <img
        src={strDrinkThumb}
        alt={strDrink}
        style={{ maxWidth: '50%', borderRadius: '8px', marginBottom: '20px' }}
      />
      <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>{strGlass}</h2>
      <h3 style={{ fontSize: '24px', marginBottom: '10px' }}>{strAlcoholic}</h3>
      <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '20px' }}>
        Ingredients: {strIngredient1}, {strIngredient2}, {strIngredient3}
      </p>
      <Link to ='/'><button>Home</button></Link>
    </div>
  );
};

export default SingleCocktail;
