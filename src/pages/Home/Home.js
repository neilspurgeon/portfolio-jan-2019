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

      <Container type={'inset'}>
        <section className={styles.intro}>
          <div className={styles.introText}>
            <h1>
              I’m a <u>designer & developer</u> based in <u>San Francisco</u>.
              I’m currently at <u>Wells Fargo</u> designing commercial banking
              software. In my free time I like to code JavaScript based side
              projects.
            </h1>
          </div>
        </section>

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
        </section>

        <div className={styles.viewAll}>
          <Cta text="View All" to="/projects" />
        </div>
      </Container>

      <Footer />
    </div>
  );
};

export default Home;
