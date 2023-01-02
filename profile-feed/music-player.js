
let trackIndex = 0;
let updateTimer;
let currTrack = document.createElement('audio');
let isPlaying = false;
let track_list = [];

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
    nowPlaying.textContent = 'Playing' + (trackIndex + 1) + ' Of ' + track_list.length;
    title.textContent = track_list[trackIndex].name;
    artist.textContent = track_list[trackIndex].artist;

    wrapper.append(screen, avatar, nowPlaying, title, artist);

    return wrapper;
}


export async function renderControls() {
    const controls = document.createElement('div');
    const previous = document.createElement('button');
    const next = document.createElement('button');

    controls.classList.add('controls');
    previous.classList.add('previous');
    next.classList.add('next');

    previous.textContent = '⏮️';

    next.textContent = '⏭️';
    const playPause = document.createElement('button');
    playPause.textContent = '';
    playPause.classList.add('play-pause');

    controls.append(previous, playPause, next);

    playPause.addEventListener('click', (e) => {
        e.preventDefault();

        if (currTrack.paused) {
            currTrack.play();
            playPause.style.display === '▶️';
        } else {
            currTrack.pause();
            playPause.style.display === '⏸️';
        }
    });

    return controls;
}

export async function renderSeeker() {
    const seeker = document.createElement('div');
    const currentTime = document.createElement('div');
    const input = document.createElement('input');
    const duration = document.createElement('div');

    seeker.classList.add('seeker');
    currentTime.classList.add('current-time');
    input.classList.add('input');
    duration.classList.add('duration');

    input.setAttribute('type', 'range');
    input.min('1');
    input.max('100');
    input.value('0');

    seeker.append(currentTime, input, duration);


    return seeker;

}


return seeker;




export function renderVolume() {
    const volume = document.createElement('div');
    const input = document.createElement('input');

    input.classList.add('volume-input');
    volume.classList.add('volume');

    input.setAttribute('type', 'range');
    input.min('1');
    input.max('100');
    input.value('99');

    volume.append(input);
}


export async function loadTrack(trackIndex) {
    const slider = document.querySelector('.input');
    currentTime.textContent = '00:00';
    duration.textContent = '00:00';
    slider.value = 0;
}

export function playNext() {
    if (trackIndex < track_list.length - 1)
        trackIndex += 1;
    else trackIndex = 0;


}

export function playPrev() {
    if (trackIndex > 0)
        trackIndex -= 1;
    else trackIndex = track_list.length - 1;
}