import "./index.scss";

const ModalDrink = ({ data, setModalDrinkContext }) => {
  const onHandleClick = () =>
    setModalDrinkContext((prev) => ({
      ...prev,
      isVisible: false,
    }));

  return (
   
   <div onClick={onHandleClick} className="ModalDrink_overlay">
   <div className="ModalDrink_background">
    <img className="Background_Modal" src={data.strDrinkThumb} alt={data.idDrink} />
    <div className="ModalDrink">
      
    <div className="ModalDrink__image">
        <img src={data.strDrinkThumb} alt={data.idDrink} />
      </div>
      <div className="ModalDrink__text">
      <div className="ModalDrink__text--main">
      <div className="ModalDrink__text--main--header">
        <h3>495 Classics</h3>
        <button onClick={onHandleClick}>X</button>
        </div>
        <h1>{data.strDrink}</h1>
        <p>Type: {data.strCategory}</p>
        <p>Glass: {data.strGlass}</p>
        <p>It was in early 1940s in New York City's Chatham Hotel bar that two
friends - John Martin (distributor of Smirnoff vodka) and Jack Morgan
(owner of Cock n Bull Saloon Ginger Beex) decided to mix their products in a
drink, giving birth to one of the iconic cocktails of the 20 th century.</p>
        </div>
        <hr />
        <div className="ModalDrink__text--lists">
          <ul className="ModalDrink__text--lists--ingredients">
            <h3>Ingredients</h3>
            <li>{data.strIngredient1}</li>
            <li>{data.strIngredient2}</li>
            <li>{data.strIngredient3}</li>
          </ul>
          <hr />
          <ul className="ModalDrink__text--lists--instructions">
            <h3>Instructions</h3>
            <li>{data.strInstructions}</li>
          </ul>
          <hr />
        </div>
        
      </div>
      </div>
      </div>
    </div>
  );
};

export default ModalDrink;
