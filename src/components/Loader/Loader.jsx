import styles from './Loader.module.css';

// Loader componet

const Loader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.lds_ellipsis}><div></div><div></div><div></div><div></div></div>
    </div>
  );
};

export default Loader;