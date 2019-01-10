import React from 'react';
import Container from 'components/Container/Container.js';
import styles from './style.css';
import Link from 'components/Link/Link.js';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      footerClasses: [styles.footer],
    };
  }

  render() {
    return (
      <footer className={this.state.footerClasses.join(' ')} data-dark>
        <Container>
          <div className={styles.footerContainer}>
            <ul className={[styles.list, styles.contact].join(' ')}>
              <li>
                <Link
                  to="mailto:hello@neilspurgeon.com"
                  text="hello@neilspurgeon.com"
                  onDark
                />
              </li>
            </ul>

            <ul className={[styles.list, styles.social].join(' ')}>
              <li>
                <Link
                  to="https://www.linkedin.com/in/neilspurgeon/"
                  text="LinkedIn"
                />
              </li>
              <li>
                <Link to="https://github.com/neilspurgeon/" text="GitHub" />
              </li>
              <li>
                <Link to="https://dribbble.com/neilspurgeon/" text="Dribbble" />
              </li>
            </ul>
          </div>
        </Container>
      </footer>
    );
  }
}

export default Footer;
