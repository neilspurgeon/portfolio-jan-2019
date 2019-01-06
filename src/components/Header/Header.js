import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'components/Container/Container.js';
import styles from './style.css';
import { withRouter } from 'react-router-dom';

const Header = props => {
  return (
    <div>
      <Container type="inset">
        <header className={styles.header}>
          <NavLink className={styles.logo} to={'/'}>
            Neil Spurgeon
          </NavLink>

          <nav className={styles.nav}>
            <ul className={[styles.list]}>
              <li>
                <NavLink
                  exact
                  className={styles.navLink}
                  activeClassName={styles.isActive}
                  to={'/projects'}
                >
                  Projects
                </NavLink>
              </li>

              <li>
                <NavLink
                  exact
                  className={styles.navLink}
                  activeClassName={styles.isActive}
                  to={'/about'}
                >
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  exact
                  className={styles.navLink}
                  activeClassName={styles.isActive}
                  to={'/contact'}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
      </Container>
    </div>
  );
};

export default withRouter(Header);
