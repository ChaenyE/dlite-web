'use strict';

import { combineReducers }    from 'redux';

import updateLegalNames       from './update-legal-name';
import updateResidenceAddress from './update-residence-address';
import updateHairColor        from './update-hair-color';
import updateContactDetails   from './update-contact-details';
import updateEyeColor         from './update-eye-color.js';
import updateDateOfBirth      from './update-date-of-birth.js';
import updateSex              from './update-sex.js';
import updateHeight           from './update-height.js';
import updateWeight           from './update-weight.js';

const rootReducer = combineReducers({
  legalName: updateLegalNames,
  residenceAddress: updateResidenceAddress,
  contactDetails: updateContactDetails,
  eyeColor: updateEyeColor,
  hairColor: updateHairColor,
  dateOfBirth: updateDateOfBirth,
  sex: updateSex,
  height: updateHeight,
  weight: updateWeight
});

export default rootReducer;
