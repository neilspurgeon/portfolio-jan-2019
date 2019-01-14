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
        intro="Ingear is an auto safety device startup formed in Beijing, China after the devastating result of a massive 2012 flood in that country They provide quality products that look at home in luxury car interiors."
        roles={['Website Design']}
        credits={[
          'Design Studio: Makers & Allies',
          'Creative Direction by: Garrett Deiter',
        ]}
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
