import { getProfileById } from '../fetch-utils.js';

let trackIndex = 0;
let updateTimer;
let currTrack = document.createElement('audio');
let isPlaying = false;
let track_list = [];

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

export function getSongs() {
    const songs = [profile - feed\music - player.js
        assets\EL U╠üLTIMO TOUR DEL MUNDO\01 EL MUNDO ES MI╠üO.mp3
        assets\EL U╠üLTIMO TOUR DEL MUNDO\02 TE MUDASTE.mp3
        assets\EL U╠üLTIMO TOUR DEL MUNDO\04 MALDITA POBREZA.mp3
        assets\EL U╠üLTIMO TOUR DEL MUNDO\07 YO VISTO ASI╠ü.mp3
        assets\EL U╠üLTIMO TOUR DEL MUNDO\08 HACIENDO QUE ME AMAS.mp3
        assets\EL U╠üLTIMO TOUR DEL MUNDO\09 BOOKER T.mp3
        assets\EL U╠üLTIMO TOUR DEL MUNDO\10 LA DROGA.mp3
        assets\EL U╠üLTIMO TOUR DEL MUNDO\11 DA╠üKITI(ft Jhay Cortez).mp3
        assets\EL U╠üLTIMO TOUR DEL MUNDO\12 TRELLAS.mp3
        assets\EL U╠üLTIMO TOUR DEL MUNDO\13 SORRY PAPI(ft ABRA).mp3
        assets\EL U╠üLTIMO TOUR DEL MUNDO\14 120.mp3
        assets\EL U╠üLTIMO TOUR DEL MUNDO\15 ANTES QUE SE ACABE.mp3
        assets\EL U╠üLTIMO TOUR DEL MUNDO\16 CANTARES DE NAVIDAD.mp3]
}

