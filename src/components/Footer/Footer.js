import React from 'react';
import Grid from 'components/Grid/Grid.js';
import styles from './style.css';
import globalStyles from 'sharedStyles/index.css';
import Waypoint from 'react-waypoint';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      footerClasses: [
        styles.footer
      ]
    };
  };

  handleEnter = () => {
    this.setState({
      footerClasses: [
        styles.footer,
        styles.inView
      ]
    });
  };

  render() {
    return (
      <Grid>
        <Waypoint bottomOffset="300px" onEnter={this.handleEnter}>
          <footer className={this.state.footerClasses.join(' ')}>

            <ul className={[styles.contact, styles.list].join(' ')}>
              <span className={globalStyles.label}>Contact</span>
              <li><a className={styles.footerLink} href="tel:1-805-748-3201">805 748 3201</a></li>
              <li><a className={styles.footerLink} href="mailto:hello@neilspurgeon.com">hello@neilspurgeon.com</a></li>
            </ul>

            <ul className={[styles.links, styles.list].join(' ')}>
              <span className={globalStyles.label}>Elsewhere</span>
              <li><a className={styles.footerLink} href="tel:1-805-748-3201">805 748 3201</a></li>
              <li><a className={styles.footerLink} href="mailto:hello@neilspurgeon.com">hello@neilspurgeon.com</a></li>
            </ul>

            <p className={styles.copyright}>©2017 Neil Spurgeon. All Rights Reserved.</p>

        </footer>
        </Waypoint>
      </Grid>
    );
  }
};

export default Footer;