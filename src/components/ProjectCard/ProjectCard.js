import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.css';
import Image from 'components/Image/Image.js';

const ProjectCard = props => {
  return (
    <Link className={[styles.card, props.className].join(' ')} to={props.path}>
      <Image
        className={styles.image}
        image={props.image}
        sizes={props.sizes}
        altText={props.altText}
      />
      <div className={styles.info}>
        <div className={styles.text}>
          <h4 className={styles.title}>{props.title}</h4>
          <p className={styles.subTitle}>{props.subTitle}</p>
        </div>

        <svg
          className={styles.arrow}
          height="15"
          viewBox="0 0 19 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path className={styles.arrowStem} d="M0 7.5H17.5" stroke="black" />
          <path
            className={styles.arrowHead}
            d="M11 1L17.5 7.5L11 14"
            stroke="black"
          />
        </svg>
      </div>
    </Link>
  );
};

export default ProjectCard;
