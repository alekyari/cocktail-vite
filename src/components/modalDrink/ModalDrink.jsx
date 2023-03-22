import styles from "./index.module.scss";

const ModalDrink = ({ data, setModalDrinkContext }) => {
  const onHandleClick = () =>
    setModalDrinkContext((prev) => ({
      ...prev,
      isVisible: false,
    }));

  return (
   
   <div onClick={onHandleClick} className={styles.ModalDrink_overlay}>
   <div className={styles.ModalDrink_background}>
    <img className={styles.Background_Modal} src={data.strDrinkThumb} alt={data.idDrink} />
    <div className={styles.ModalDrink}>
      
    <div className={styles.image}>
        <img src={data.strDrinkThumb} alt={data.idDrink} />
      </div>
      <div className={styles.text}>
      <div className={styles.text_main}>
      <div className={styles.text_main_header}>
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
        <hr />
        </div>
       
        <div className={styles.text_lists}>
          <ul className={styles.text_lists_ingredients}>
            <h3>Ingredients</h3>
            <li>{data.strIngredient1}</li>
            <li>{data.strIngredient2}</li>
            <li>{data.strIngredient3}</li>
          </ul>
          <hr />
          <ul className={styles.text_lists_instructions}>
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
