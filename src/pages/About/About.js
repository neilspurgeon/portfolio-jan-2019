import React from 'react';
import DefaultLayout from 'layouts/DefaultLayout/DefaultLayout.js';
import styles from './styles.css';

const content = (
  <div>
    <h1 className={styles.intro}>
      Hi, I'm Neil. I'm a designer and developer in San Francisco, CA. I
      currently work as a designer, but am also skilled in full stack web
      development. Outside of work, I'm constantly coding side projects — most
      recently with React Native.
      {/* I'm a designer and developer based in San Francisco. While primarily
      working as designer, I write lots of code outside of work and love the
      empowerment it gives me. */}
    </h1>
    <h2 className={styles.sectionHeading}>Experience</h2>
    <p className={styles.body}>
      Square — San Francisco, CA
      <br />
      Product Designer, Jul. 2019 - Current
    </p>
    <p className={styles.body}>
      Wells Fargo — San Francisco, CA
      <br />
      Visual UX Designer, Jul. 2018 - Jun. 2019
    </p>
    <p className={styles.body}>
      Hewlett-Packard — Palo Alto, CA
      <br />
      Designer, Mar. 2018 - Jul. 2018 (Contract)
    </p>
    <p className={styles.body}>
      Hathway — San Luis Obispo, CA
      <br />
      Senior Designer, Jan. 2017 - Feb. 2018
      <br />
      Visual Designer, Sep. 2015 - Dec.
    </p>
    <p className={styles.body}>
      Indicate Design Groupe — San Francisco, CA
      <br />
      Designer, Apr. 2014 - Apr. 2015
    </p>
    <h2 className={styles.sectionHeading}>Education</h2>
    <p className={styles.body}>
      Education General Assembly — San Francisco, CA
      <br />
      Web Development Immersive
      <br />
      Completed 2015
    </p>

    <p className={styles.body}>
      California Polytechnic State University — San Luis Obispo, CA
      <br />
      BFA Art & Design; Graphic Design Concentration
      <br />
      Graduated 2013
    </p>
  </div>
);

const About = () => {
  return (
    <DefaultLayout pageTitle="About" headerText={'About'} content={content} />
  );
};

export default About;
