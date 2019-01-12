import React from 'react';
import Container from 'components/Container/Container.js';
import Header from 'components/Header/Header.js';
import Footer from 'components/Footer/Footer.js';
import styles from './styles.css';
import { Helmet } from 'react-helmet';

const DefaultLayout = props => {
  return (
    <div>
      <div className={styles.pushFooter}>
        <Helmet>
          <title>{props.pageTitle} – Neil Spurgeon. Product Designer</title>
        </Helmet>

        <Header />

        <Container>
          <div className={styles.pageLayout}>
            <h1 className={styles.headerText}>{props.headerText}</h1>

            <section>{props.content}</section>
          </div>
        </Container>
      </div>

      <Footer />
    </div>
  );
};

export default DefaultLayout;
