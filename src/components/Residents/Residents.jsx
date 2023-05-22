import axios from 'axios';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// Componet to get the number of residents of that location and display the number

const Residents = ({ u }) => {
  const [number, setNumber] = useState(0);
  //API call to get the residents of that location
  useEffect(() => {
    try {
      const getdata = async () => {
        const { data } = await axios.get(`${u}`);
        //geting the number of residents of that location and checks are made if the recived data is undefined or null
        const res = data?.residents?.length;
        setNumber(res);
      };
      getdata();
    } catch (err) {
      console.log(err);
    }
  }, [u]);
  return (
    <div style={{ fontSize: '14px', letterSpacing: '0.5px' }}>Residents : {number}</div>
  );
};

Residents.propTypes = {
  u: PropTypes.string
};

export default Residents;