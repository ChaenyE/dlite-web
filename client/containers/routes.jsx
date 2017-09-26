'use strict';

import React from 'react';
import { Route } from 'react-router-dom';

import Home              from '../presentations/home.jsx';
import Summary           from './summary-handler.jsx';

import LegalName         from './legal-name-form-container.jsx';
import DateOfBirth       from './date-of-birth-form-container.jsx';
import HomeAddress       from './home-address-form-container.jsx';
import MailingAddress    from './mailing-address-form-container.jsx';
import Sex               from './sex-selector-form-container.jsx';
import HairColor         from './hair-color-form-container.jsx';
import EyeColor          from './eye-color-form-container.jsx';
import Height            from './height-form-container.jsx';
import Weight            from './weight-form-container.jsx';
import SocialSecurity    from './social-security-form-container.jsx';

import YesNoSelector     from '../presentations/yes-no-selector.jsx';
import VoterCitizen      from '../presentations/voter/citizen-form.jsx';
import Contact           from './contact-details-form-container.jsx';

import alicePath         from '../helpers/alice-path';

class Router extends React.Component {
  render() {
    return (
      <div className='routes'>
        <Route path={ alicePath('/') } exact component={Home} />
        <Route path={ alicePath('/summary') } component={Summary} />

        <Route path={ alicePath('/about-me/legal-name') } component={LegalName} />
        <Route path={ alicePath('/about-me/date-of-birth') } component={DateOfBirth} />
        <Route path={ alicePath('/about-me/home-address') } component={HomeAddress} />
        <Route path={ alicePath('/about-me/is-mailing-same/') } component={YesNoSelector} />
        <Route path={ alicePath('/about-me/mailing-address') } component={MailingAddress} />
        <Route path={ alicePath('/about-me/sex') } component={Sex} />
        <Route path={ alicePath('/about-me/appearance/eye') } component={EyeColor} />
        <Route path={ alicePath('/about-me/appearance/hair' ) } component={HairColor} />
        <Route path={ alicePath('/about-me/height' ) } component={Height} />
        <Route path={ alicePath('/about-me/weight' ) } component={Weight} />
        <Route path={ alicePath('/about-me/social-security' ) } component={SocialSecurity} />
        <Route path={ alicePath('/about-me/voter/am-citizen') } component={VoterCitizen} />

        <Route path={ alicePath('/about-me/contact') } component={Contact} />
      </div>
    );
  }
}

export default Router;
