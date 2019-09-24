import React from 'react';
import Container from 'components/Container/Container.js';
import Header from 'components/Header/Header.js';
import Footer from 'components/Footer/Footer.js';
import styles from './styles.css';
import projects from 'projects';
import ProjectCard from 'components/ProjectCard/ProjectCard.js';
import Cta from 'components/Cta/Cta.js';
import { Helmet } from 'react-helmet';

// Only show first 4 projects on home page
const featuredProjects = projects.slice(0, 4);

const Home = props => {
  return (
    <div>
      <Helmet>
        <title>Home – Neil Spurgeon. Product Designer</title>
      </Helmet>

      <Header />

      <Container>
        <section className={styles.intro}>
          <h1>
            Product designer based in San Francisco. Currently at Square.
          </h1>
        </section>

        <div className={styles.content}>
          <h4 className={styles.projectsHeader}>Featured Projects</h4>

          <section className={styles.projects}>
            {featuredProjects.map((project, i) => {
              return (
                <ProjectCard
                  key={project.data.title}
                  className={styles.card}
                  path={project.data.path}
                  image={project.data.homeCard}
                  sizes="(max-width: 751px) 100vw, 40vw"
                  altText={project.data.title}
                  title={project.data.title}
                  subTitle={project.data.subTitle}
                />
              );
            })}

            <div className={styles.viewAll}>
              <Cta text="View All" to="/projects" />
            </div>
          </section>
        </div>
      </Container>

      <Footer />
    </div>
  );
};

export default Home;
