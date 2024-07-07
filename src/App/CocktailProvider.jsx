import React, { useEffect, useState } from 'react';
import CocktailContext from './CocktailContext';
import axios from 'axios';

const CocktailProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [cocktails, setCocktails] = useState([]);
  const [noCocktails,setNoCocktails]= useState(false)
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`;

  useEffect(() => {
    const fetchCocktail = async () => {
      try {
        const res = await axios.get(URL);
        console.log(res.data.drinks);
        setCocktails(res.data.drinks || []);
        setTimeout(()=>{
          setLoading(false)
        },600)
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchCocktail();
  }, [searchTerm]); // Added searchTerm as a dependency to re-fetch when it changes

  return (
    <CocktailContext.Provider value={{ searchTerm, loading, cocktails,noCocktails, setNoCocktails,setSearchTerm, setCocktails, setLoading }}>
      {children}
    </CocktailContext.Provider>
  );
};

export default CocktailProvider;
