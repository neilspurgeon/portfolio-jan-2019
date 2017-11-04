import React from 'react';
import ProjectHeader from 'components/ProjectHeader/ProjectHeader.js';
import ProjectHero from 'components/ProjectHero/ProjectHero.js';
import heroImage from './images/coffeebean-web-hero.jpg';
import ProjectText from 'components/ProjectText/ProjectText.js';
import ProjectImage from 'components/ProjectImage/ProjectImage.js';

const CoffeBeanEcomerce = () => {
  return (
    <div>
      <ProjectHeader
        title={'Coffee Bean Ecommerce'}
        byLine={'— Website Design, UX Design'}
      />

    <ProjectHero
        image={heroImage}
        altText="Coffe Bean and Tea Leaf Homepages."
      />

      <ProjectText>
        <p>After succesfully launching their mobile app, Hathway was overhaul The Coffee Bean & Tea Leaf’s ecommerce website experirence. This included a complete redesign of their existing shopping pages, aswell as additional storytelling, marketing, and company information pages.</p>
        <p>My role on the project was lead ux and ui design. Our process began with creating a comprehensive site map and then creating low fideltity wireframes of each page type. By doing this we were able to lock down content and overall structure before diving into full fidelty ui.</p>
      </ProjectText>

      <ProjectImage
        image={heroImage}
        altText="Coffe Bean and Tea Leaf Homepages."
      />
    </div>
  );
};

export default CoffeBeanEcomerce;