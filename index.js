// Write your code here!
const postList = document.getElementById('post-list');

function displayPosts(posts) 
{
    posts.forEach(post => {
    const li = document.createElement('li');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');

    h1.textContent = post.title;
    p.textContent = post.body;

    li.appendChild(h1);
    li.appendChild(p);
    postList.appendChild(li);
    });
}

async function getPosts()
{
    
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
        displayPosts(posts);
        return posts;

}

getPosts();
