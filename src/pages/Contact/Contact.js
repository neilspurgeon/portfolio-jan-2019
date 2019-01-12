import React from 'react';
import DefaultLayout from 'layouts/DefaultLayout/DefaultLayout.js';
import Link from 'components/Link/Link.js';
import styles from './styles.css';

const header = <h1 className={styles.header}>Contact</h1>;

const content = (
  <div>
    <h1>
      <Link
        to="mailto:hello@neilspurgeon.com"
        text="hello@neilspurgeon.com"
        defaultUnderline
      />
      <br />
      <Link to="tel:18057483201" text="+1.805.748.3201" />
    </h1>
  </div>
);

const Contact = () => {
  return (
    <DefaultLayout
      pageTitle="Contact"
      headerText={'Contact'}
      content={content}
    />
  );
};

export default Contact;
