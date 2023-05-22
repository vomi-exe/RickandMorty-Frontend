import Carousel from '../Carousel/Carousel';
import Residents from '../Residents/Residents';
import styles from './Card.module.css';
import PropTypes from 'prop-types';

//display individul card

const Card = ({ character }) => {
  const statusColor = character.status === 'Alive' ? 'green' : character.status === 'Dead' ? 'red' : 'yellow';
  return (<>
    <div className={styles.card}>
      <div className={styles.imagewrapper}>
        <img className={styles.image} src={character.image} alt="" />
      </div>
      <div className={styles.name}>{character.name}</div>
      <div className={styles.gender}>{character.gender}</div>
      <div className={styles.paragraph}>
        <div className={styles.origin}>
          <div className={styles.origin_title}>Origin : {character.origin.name}</div>
          {/* to display resident of that location */}
          <Residents u={character.origin.url} />
        </div>
        <div className={styles.location}>
          <div className={styles.location_title}>Current Location : {character.location.name}</div>
          {/* to display resident of that location */}
          <Residents u={character.location.url} />
        </div>
      </div>
      <div className={styles.priceandtime}>
        <div className={styles.species}>{character.species}</div>
        <div className={styles.status} style={{ color: statusColor }}> {character.status}</div>
      </div>
      <div className={styles.linebreak}></div>
      <div className={styles.chapters}>
        <span className={styles.chapters_title}>Chapters Featured in :</span>
        {/* to display all the chapter charater is feateured in */}
        <Carousel chapters={character.episode} />
      </div>
    </div >

  </>
  );
};

Card.propTypes = {
  character: PropTypes.object,
};


export default Card;