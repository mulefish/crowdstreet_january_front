import React from 'react';
import Footer from '../components/Footer.jsx';
import LandingPage from '../components/LandingPage.jsx';

export default function LandingPageInit() {
  return (
    <div>
      <React.Fragment>
        <LandingPage content={null} />
        <Footer content={null} />
      </React.Fragment>
    </div>
  );
}

