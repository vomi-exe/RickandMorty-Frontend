import styles from './Header.module.css';

//Header componet 

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.title} >Rick and Morty</div>
    </div>
  );
};

export default Header;