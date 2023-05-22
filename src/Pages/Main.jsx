import { useState, useEffect } from 'react';
import axios from 'axios';
import CardList from '../components/CardList/CardList';
import styles from './Main.module.css';
import Loader from '../components/Loader/Loader';

const getCharactersId = (val) => {
  let s = (val - 1) * 10 + 1;
  let e = val * 10;
  let arr = [];
  for (let i = 0; s <= e; i++, s++) {
    arr[i] = s;
  }
  return arr;
};

const Main = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const getdata = async () => {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character/[${getCharactersId(
            page
          ).toString()}]`
        );
        setCharacters((prev) => [...prev, ...response.data]);
      };
      if (page < 91) {
        getdata();
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  }, [page]);

  const handleScroll = () => {
    if (
      (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight-400) & page < 91) {
      setLoading(true);
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <div className={styles.container}>
      <CardList characters={characters} />
      {loading && <Loader />}
    </div>
  );
};

export default Main;
