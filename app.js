/* Imports */
// this will check if we have a user and set signout link if it exists
import './auth/user.js';

import { checkAuth, getProfile, getProfiles, getUser, searchByUsername } from './fetch-utils.js';

import { renderProfile } from './render-utils.js';

/* Get DOM Elements */
const marilynEl = document.getElementById('marilyn-img');

const miliEl = document.getElementById('mili-img');


checkAuth();
export async function displayMarilyn(){
    
}



