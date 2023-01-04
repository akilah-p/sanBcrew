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
        name: 'Sorry Papi',
        artist: 'Bad Bunny',
        src: '.assets/EUDTM/01 El Mundo ES MIO.mp3'

    }
]

// export function getSongs() {
//     const songs = [
//         ''assets\EUTDM\01 EL MUNDO ES MIO.mp3'
//         'assets\EUTDM\02 TE MUDASTE.mp3
//         'assets\EUTDM\03 HOY COBRE.mp3
//         'assets\EUTDM\04 MALDITA POBREZA.mp3
//         'assets\EUTDM\05 LA NOCHE DE ANOCHE(ft ROSALIA).mp3
//         'assets\EUTDM\06 TE DESEO LO MEJOR.mp3
//         'assets\EUTDM\07 YO VISTO ASI.mp3
//         'assets\EUTDM\08 HACIENDO QUE ME AMAS.mp3
//         'assets\EUTDM\09 BOOKER T.mp3
//         'assets\EUTDM\10 LA DROGA.mp3
//         'assets\EUTDM\11 DAKITI(ft Jhay Cortez).mp3
//         'assets\EUTDM\12 TRELLAS.mp3
//         'assets\EUTDM\13 SORRY PAPI(ft ABRA).mp3
//         'assets\EUTDM\14 120.mp3
//         'assets\EUTDM\15 ANTES QUE SE ACABE.mp3
//         'assets\EUTDM\16 CANTARES DE NAVIDAD.mp3]
// }

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
