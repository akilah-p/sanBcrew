/* Imports */
// this will check if we have a user and set signout link if it exists
import './auth/user.js';

import { checkAuth } from './fetch-utils.js';


/* Get DOM Elements */


checkAuth();
// window.addEventListener('load', async () => {
//     displayMarilyn();
//     displayMili();
// });


// const card = document.querySelector('card');


// function flipCard() {
//     card.classList.toggle('flip-card');

// }

// card.addEventListener('click', flipCard);


// async function displayMarilyn() {
//     marilynEl.textContent = '';
//     const front = renderMarilynImage();
//     const back = renderMarilynVideo();


//     marilynEl.append(front, back);

//     marilynEl.addEventListener('click', () => {
//         marilynEl.classList.toggle('marilyn-card');

//         console.log('marilyn', marilynEl);

//     });
//     return marilynEl;

// }

// async function displayMili() {
//     miliEl.textContent = '';
//     const front = renderMiliImage();
//     const back = renderMiliVideo();


//     miliEl.append(front, back);

//     miliEl.addEventListener('click', () => {
//         miliEl.classList.toggle('mili-card');
//     });
//     return miliEl;
// }




