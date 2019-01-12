import React from 'react';
import styles from './styles.css';
import projects from 'projects';
import ProjectCard from 'components/ProjectCard/ProjectCard.js';
import DefaultLayout from 'layouts/DefaultLayout/DefaultLayout.js';

const content = (
  <section className={styles.projects}>
    {projects.map((project, i) => {
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
);

const Projects = () => {
  return (
    <DefaultLayout
      pageTitle="Projects"
      headerText={'Projects'}
      content={content}
    />
  );
};

export default Projects;
