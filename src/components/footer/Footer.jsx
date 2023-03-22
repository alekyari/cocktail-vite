import styles from "./index.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <ul className={styles.container}>
      <li><a className={styles.element} href="https://www.google.it/">Termini di utilizzo e informativa sulla privacy</a></li>   
      <li><a className={styles.element} href="https://www.google.it/">Invia commenti</a></li>   
      <li><a className={styles.element} href="https://www.google.it/">Informativa sui cookie</a></li>   
      <li><p className={styles.element} >© 1996-2023, Inc. o società affiliate</p></li>   
      </ul>
      </div>
  )
};

export default Footer;
