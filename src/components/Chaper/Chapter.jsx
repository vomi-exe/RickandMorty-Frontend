import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Chapter.module.css';
import PropTypes from 'prop-types';

const Chapter = ({ c }) => {
  const [name, setName] = useState('');
  //API call to get name Chapters that the character is featured in
  useEffect(() => {
    try { 
      const getdata = async () => {
        const response = await axios.get(`${c}`);
        setName(response.data.name);
      };
      getdata();
    } catch (err) { console.log(err); }
  }, [c]);

  return (<>
    <div className={styles.details}>{name}</div>
  </>
  );
};

Chapter.propTypes = {
  c: PropTypes.string
};

export default Chapter;