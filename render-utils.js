import { deletePost, getPosts, getProfileById, getProfiles } from './fetch-utils.js';
import { displayPosts } from './profile-feed/profile-feed.js';


// render profile on home page
export function renderModalBox() {
    const div = document.createElement('div');
    const p = document.createElement('p');
    const btn = document.createElement('button');

    div.classList.add('modal-box');
    p.classList.add('modal-message');
    btn.classList.add('close');

    p.textContent = ''

    // figure out how to only display once per user
}

export async function renderMusicPlayer(profile) {
    const wrapper = document.createElement('div');
    const screen = document.createElement('div');
    const nowPlaying = document.createElement('div');
    const avatar = document.createElement('img');
    const title = document.createElement('p');
    const artist = document.createElement('p');


    wrapper.classList.add('wrapper');
    screen.classList.add('screen');
    avatar.classList.add('avatar');

    nowPlaying.classList.add('now-playing');
    title.classList.add('title');
    artist.classList.add('artist');

    avatar.src = profile.avatar_url;
    nowPlaying.textContent = `${}`;
    title.textContent = `${}`;
    artist.textContent = `${}`;

    wrapper.append(screen, avatar, nowPlaying, title, artist);

    return wrapper;
}





export async function renderControls() {
    const controls = document.createElement('div');
    const previous = document.createElement('button');
    const play = document.createElement('button');
    const pause = document.createElement('button');
    const next = document.createElement('button');

    controls.classList.add('controls');
    previous.classList.add('previous');


    previous.textContent = '⏮️';
    pause.textContent = '⏸️';
    next.textContent = '⏭️';
    const playPause = document.createElement('button');
    playPause.textContent = '';
    button.classList.add('play-pause');

    controls.append(previous, button, next);

    return controls;
}

export async function renderSeeker() {
    const slider = document.createElement('div');
    const currentTime = document.createElement('div');
    const input = document.createElement('input');
    const duration = document.createElement('div');

    slider.classList.add('slider');
    currentTime.classList.add('current-time');
    input.classList.add('input');
    duration.classList.add('duration');

    input.setAttribute('type', 'range');
    input.min('1');
    input.max('100');
    input.value('0');

}

export async function renderVolume() {
    const volume = document.createElement('div');
    const input = document.createElement('input');

    input.classList.add('volume');


    input.setAttribute('type', 'range');
    input.min('1');
    input.max('100');
    input.value('99');

}