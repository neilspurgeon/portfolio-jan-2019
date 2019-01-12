import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.css';
import Container from 'components/Container/Container.js';

const NextProject = props => {
  return (
    <Container>
      <div className={styles.linkWrapper}>
        <Link to={props.path} className={styles.nextLink}>
          <h2 className={styles.nextText}>
            <span className={styles.label}>Next Project</span>
            <br />
            <span className={styles.nextTitle}>{props.title}</span>
          </h2>
        </Link>
      </div>
    </Container>
  );
};

export default NextProject;
