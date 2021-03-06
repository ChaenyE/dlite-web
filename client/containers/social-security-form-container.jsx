'use strict';

import React from 'react';

import { updateSocialSecurity }  from "../actions/index";
import Form                   from "../presentations/social-security-form.jsx";
import connectForm            from '../helpers/connect-form';
import navigateOnSubmit       from '../helpers/navigate-on-submit';
import * as dataPresent       from '../helpers/data-present';

const ConnectedForm = (props) => {
  let onSubmit = navigateOnSubmit('/about-me/voter/am-citizen', props);
  let continueDisabled = !(dataPresent.socialSecurity(props.socialSecurity));

  return (
    <Form
      onSubmit={onSubmit}
      onChange={props.onChange}
      socialSecurity={props.socialSecurity}
      continueDisabled={continueDisabled}
    />
  );
};

function mapStateToProps(state) {
  return {
    socialSecurity: state.application.socialSecurity
  };
}

export default connectForm(mapStateToProps, updateSocialSecurity, ConnectedForm);
