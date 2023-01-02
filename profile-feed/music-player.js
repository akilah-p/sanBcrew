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

