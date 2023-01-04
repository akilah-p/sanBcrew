import { getProfileById } from '../fetch-utils.js';

// window.addEventListener("load", event => {
////////////////
// Variables
////////////////

//     const iconTopExpand = document.querySelector(".icon.topExpand"),
//         iconBottomExpand = document.querySelector(".icon.bottomExpand"),
//         topContent = document.querySelector(".topContent"),
//         bottomContent = document.querySelector(".bottomContent"),
//         playBtn = document.querySelector(".btnPlay"),
//         musicGroups = document.querySelector(".swiper-wrapper.slider-two"),
//         swipperWrapper = document.querySelector(".swiper-wrapper.slider-one"),
//         imageBg = document.querySelector(".imageBg"),
//         albumBg = document.querySelector(".albumBg"),
//         wrapper = document.querySelector(".wrapper"),
//         bodyBg = document.querySelector(".bodyBg"),
//         next = document.querySelector(".swiper-button-next"),
//         prev = document.querySelector(".swiper-button-prev");
// }


const songs = new Audio[
    {
        name: 'El Mundo Es Mio',
        artist: 'Bad Bunny',
        song: '.assets/01.mp3',
        color: "#f5c63d"

    },

    {
        name: 'Yonaguni',
        artist: 'Bad Bunny',
        song: 'assets/01 - Yonaguni [Explicit].mp3',
        color: "#afc5c3"
    }
]

    /

// HTML elements

export async function renderMenuBar() {
    // profile information portion off music player
    // get element by id on index html
    // const wrapper = document.createElement('div');
    const content = document.createElement('div');
    const topContent = document.createElement('div');
    const menuBar = document.createElement('div');
    const topExpand = document.createElement('div');
    const username = document.createElement('div');



    content.classList.add('content');
    topContent.classList.add('top-content');
    menuBar.classList.add('menu-bar');
    topExpand.classList.add('topExpand');
    username.classList.add('username');


    const profile = getProfileById();
    username.textContent = profile.username;
    menuBar.textContent = '';

    content.append(topContent, menuBar, topExpand, username);

    return content;
}


// Events


// Middle


// Bottom

// display their magazines function for images and function for video
// those functions will replace playlists and will add fourth

// middle
