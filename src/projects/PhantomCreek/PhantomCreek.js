import React from 'react';
import Image from 'components/Image/Image.js';
// import ProjectText from 'components/ProjectText/ProjectText.js';
import ProjectSection from 'components/ProjectSection/ProjectSection.js';
// import Container from 'components/Container/Container.js';
import ProjectOverview from 'components/ProjectOverview/ProjectOverview.js';

// images
import mobile from './images/pce-mobile.jpg';
import home from './images/pce-home.jpg';
import visit from './images/pce-visit.jpg';
import contact from './images/pce-contact.jpg';
import shop from './images/pce-shop.jpg';
import wine from './images/pce-wine.jpg';

const PhantomCreek = () => {
  return (
    <div>
      <ProjectOverview
        intro="Phantom Creek Estates is a new winery in British Columbia's Okanagan Valley. The region is filled with rich textures and stunning landscapes that were used to influence the design."
        roles={['Website Design']}
        credits={[
          'Design Studio: Makers & Allies',
          'Creative Direction by: Garrett Deiter',
        ]}
        linkUrl="https://phantomcreekestates.com/"
        linkText="phantomcreekestates.com"
      />

      <ProjectSection>
        <Image image={mobile} />
        <Image image={home} />
        <Image image={visit} />
        <Image image={contact} />
        <Image image={shop} />
        <Image image={wine} />
      </ProjectSection>
    </div>
  );
};

export default PhantomCreek;
