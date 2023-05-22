import styles from './Carousel.module.css';
import Chapter from '../Chaper/Chapter';
import PropTypes from 'prop-types';

// componet to render the chapters that the character is featured in

const Carousel = ({ chapters }) => {

  return (
    <section className={styles.check}>
      <div id="carousel" className={styles.carousel_body} >
        {chapters.map((c, id) => {
          return (<Chapter key={id} c={c} />);
        })}
      </div>
    </section>
  );
};

Carousel.propTypes = {
  chapters: PropTypes.array
};

export default Carousel;