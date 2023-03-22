import styles from "./index.module.scss";

const DrinkCard = ({ data, setModalDrinkContext }) => {
  const onHandleClick = () =>
  setModalDrinkContext((prev) => ({
    ...prev,
    payload: data,
    isVisible: true,
  }));
  return (
    <div onClick={onHandleClick} className={styles.DrinkCard}>
      <img src={data.strDrinkThumb} alt={data.strDrink} />
      <div className={styles.arrow_up}></div>
      <div className={styles.text}>
      
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
