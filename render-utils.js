import { deletePost, getPosts } from './fetch-utils.js';
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

export async function renderMarilynImage(marilyn) {
    const divImg = document.createElement('div');
    const img = document.createElement('img');


    divImg.classList.add('img-container');
    img.classList.add('marilyn-mag');

    img.src = '/assets/Marilyn.png';

    divImg.append(img);
    return divImg;
}

export async function renderMiliImage() {
    const divImg = document.createElement('div');
    const img = document.createElement('img');


    divImg.classList.add('mili-img-container');
    img.classList.add('mili-mag');

    img.src = '/assets/Mili.png';

    divImg.append(img);
    return divImg;
}

export async function renderMarilynVideo(marilyn) {

    const divVideo = document.createElement('div');
    const video = document.createElement('video');

    divVideo.classList.add('video-container');
    video.classList.add('marilyn-vid');

    video.src = '/assets/Marilyn.mp4';

    divVideo.append(video);
    return divVideo;
}


export async function renderMiliVideo() {

    const divVideo = document.createElement('div');
    const video = document.createElement('video');

    divVideo.classList.add('mili-video-container');
    video.classList.add('mili-vid');

    video.src = '/assets/Mili.mp4';

    divVideo.append(video);
    return divVideo;
}


export function renderPost(postObject, profile) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const p1 = document.createElement('p');
    const deleteButton = document.createElement('button');
    if (postObject.profile_id === profile.data.id) {
        deleteButton.classList.add('delete-button');
    } else {
        deleteButton.style.display = 'none';
    }

    div.classList.add('post-list');
    img.classList.add('picture');
    p.classList.add('location');
    p1.classList.add('description');

    img.src = postObject.pictures_url;
    img.alt = '';
    p.textContent = postObject.location;
    p1.textContent = postObject.description;
    deleteButton.textContent = 'Delete Post';

    // delete post event listener
    deleteButton.addEventListener('click', async () => {
        // deletePosts by post id
        await deletePost(postObject.id);

        // update posts by profile_id
        const updatedPosts = await getPosts(postObject.profile_id);

        if (confirm('Click Ok to delete post. This action cannot be done')) {
            // display updated posts
            displayPosts(updatedPosts);
        } else {
            location.assign(`/profile-feed/?id=${profile.profile_id}`);
        }
    });

    div.append(img, p, p1, deleteButton);
    return div;
}
