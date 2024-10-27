async function fetchPosts() {
    const response = await fetch('https://dummyjson.com/posts');
    const data = await response.json();
    return data.posts;
}

function renderPosts(posts) {
    const container = document.getElementById('posts-container');
    container.innerHTML = '';

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post'); 

        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            <span>Author: ${post.userId}</span>
        `;

        container.appendChild(postElement);
    });
}

async function loadAndRenderPosts() {
    const posts = await fetchPosts();
    renderPosts(posts);
}

window.onload = loadAndRenderPosts;