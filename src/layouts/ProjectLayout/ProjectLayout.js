import React from 'react';
import Header from 'components/Header/Header.js';
import ProjectHeader from 'components/ProjectHeader/ProjectHeader.js';
import ProjectHero from 'components/ProjectHero/ProjectHero.js';
import ProjectHeroVideo from 'components/ProjectHeroVideo/ProjectHeroVideo.js';
import NextProject from 'components/NextProject/NextProject.js';
import Footer from 'components/Footer/Footer.js';
import { Helmet } from 'react-helmet';

const ProjectLayout = props => {
  console.log(props);
  return (
    <div>
      <Helmet>
        <title>{props.title} – Neil Spurgeon. Product Designer</title>
      </Helmet>

      <Header />

      <ProjectHeader title={props.title} subTitle={props.subTitle} />

      {props.heroVideo ? (
        <ProjectHeroVideo src={props.heroVideo} altText={props.altText} />
      ) : (
        <ProjectHero image={props.hero} altText={props.altText} />
      )}

      {props.children}

      <NextProject
        image={props.nextProjectImage}
        title={props.nextProjectTitle}
        path={props.nextProjectPath}
      />

      <Footer />
    </div>
  );
};

export default ProjectLayout;
