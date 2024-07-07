import React, { useContext, useEffect } from 'react';
import CocktailContext from '../App/CocktailContext';
import Loading from './Loading';

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '20px',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '10px',
  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
  backgroundColor: '#f9f9f9',
 
};

const inputStyle = {
  width: '50%',
  padding: '10px',
  margin: '10px 0',
  borderRadius: '5px',
  border: '1px solid #ccc',
  fontSize: '16px',
  boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)',
};

const titleStyle = {
  margin: '10px 0',
  fontSize: '24px',
  color: '#333',
};

const noCocktailsStyle = {
  textAlign: 'center',
  color: '#ff0000',
};

const SearchForm = () => {
  const {
    searchTerm,
    cocktails,
    setSearchTerm,
    noCocktails,
    setNoCocktails,
    loading,
    setLoading
  } = useContext(CocktailContext);

  useEffect(() => {
    if (cocktails.length === 0) {
      return setNoCocktails(true);
    }
    setNoCocktails(false);
  }, [searchTerm, cocktails]);

  return (
    <>
    
       <form style={formStyle} onSubmit={(e) => e.preventDefault()}>
      <h3 style={titleStyle}>Explore the Cocktails!!</h3>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) =>(
          setLoading(true),
          setSearchTerm(e.target.value)
        )}
        style={inputStyle}
      />
      {noCocktails && (
        <h1 style={noCocktailsStyle}>No cocktails found</h1>
      )}
    </form>
    {loading &&<Loading/>}
    </>
  );
};

export default SearchForm;
