import "./index.scss";

const DrinkCard = ({ data }) => {
  return (
    <div className="DrinkCard">
      <img src={data.strDrinkThumb} alt={data.strDrink} />
      <div className="arrow-up"></div>
      <div className="DrinkCard__text">
      
        <h2>{data.strDrink}</h2>
        <ul>
          <li>{data.strIngredient1}</li>
          <li>{data.strIngredient2}</li>
          <li>{data.strIngredient3}</li>
          <li>{data.strIngredient4}</li>
        </ul>
      </div>
    </div>
  );
};

export default DrinkCard;
