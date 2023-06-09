
import Card from '../Card/Card';
import styles from './CardList.module.css';
import PropTypes from 'prop-types';

// iterates through all the characters to dispaly them as card components
const CardList = (props) => {
  return (
    <div className={styles.cardlist}>
      {props.characters.map((character) => {
        return (<Card key={character.id} character={character} />);
      })}
    </div>
  );
};

CardList.propTypes = {
  characters: PropTypes.array
};


export default CardList;