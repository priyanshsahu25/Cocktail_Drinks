import React from 'react';
import {Link} from 'react-router-dom'
const cardStyle = {
  border: '2px solid grey',
  width: '300px',
  borderRadius: '10px',
  overflow: 'hidden',
  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
  transition: '0.3s',
  margin: '20px',
};

const imageStyle = {
  height: '200px',
  width: '300px',
  objectFit: 'cover',
};

const titleStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '10px 0',
  textAlign: 'center',
};

const subTitleStyle = {
  fontSize: '18px',
  color: 'grey',
  margin: '5px 0',
  textAlign: 'center',
};

const textStyle = {
  fontSize: '16px',
  margin: '10px 0',
  textAlign: 'center',
  padding: '0 10px',
};

const Card = ({ strDrinkThumb, strDrink, strGlass, strAlcoholic,idDrink }) => {
  return (
    <div style={cardStyle}>

      <Link to ={`/cocktail/${idDrink}`}>
      <img src={strDrinkThumb} alt="Image" style={imageStyle} />
      </Link>
      <h1 style={titleStyle}>{strDrink}</h1>
      <h2 style={subTitleStyle}>{strGlass}</h2>
      <p style={textStyle}>{strAlcoholic}</p>
    </div>
  );
};

export default Card;
