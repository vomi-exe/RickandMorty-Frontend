import axios from 'axios';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
const Residents = ({ u }) => {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    const getdata = async () => {
      const response = await axios.get(`${u}`);
      setNumber(response.data.residents.length);
    };
    getdata();
  }, [u]);
  return (
    <div style={{ fontSize: '14px', letterSpacing: '0.5px' }}>Residents : {number}</div>
  );
};

Residents.propTypes = {
  u: PropTypes.string
};

export default Residents;