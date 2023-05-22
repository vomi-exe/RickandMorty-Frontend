import { useState, useEffect } from 'react';
import axios from 'axios';
import CardList from '../components/CardList/CardList';
import styles from './Main.module.css';
import Loader from '../components/Loader/Loader';

// Utility function to get next 10 characters to display
// I have not notices that API calls can be made through pages so implemented this but it can be made through page variable also :)

const getCharactersId = (val) => {
  let s = (val - 1) * 10 + 1;
  let e = val * 10;
  let arr = [];
  for (let i = 0; s <= e; i++, s++) {
    arr[i] = s;
  }
  return arr;
};

// Main Component renders infinte scroll and all the Card Componets

const Main = () => {

  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  // API call to get 10 characters
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
      //Used simple console Log but can be use to change state if something goes wrong
      console.log(err);
    }
    setLoading(false);
  }, [page]);

  // infinite scroll handler
  const handleScroll = () => {
    if (
      (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight-400) & page < 91) {
      setLoading(true);
      setPage((prev) => prev + 1);
    }
  };
  //event listener for scroll event
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
