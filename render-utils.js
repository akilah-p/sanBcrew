import { deletePost, getPosts } from './fetch-utils.js';
import { displayPosts } from './profile-feed/profile-feed.js';

// render profile on home page
export function renderProfile(profile) {
    // container and elements and link
    const a = document.createElement('a');

    const img = document.createElement('img');
    // avatar

    // username
    const p = document.createElement('p');
    const h2 = document.createElement('h2');

    // class lists
    a.classList.add('profile-container');

    img.classList.add('avatar');
    p.classList.add('username');
    h2.classList.add('headline');


    img.alt = '';
    // avatar
    img.src = profile.avatar_url;
    img.alt = 'avatar';

    // text content
    p.textContent = `${profile.username}`;
    a.href = `../profile-feed/?id=${profile.id}`;


    // append
    a.append(img, h2, p);

    // return
    return a;
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
