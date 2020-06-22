const posts = [
    {title: 'Post One', body: 'This is a post 1'},
    {title: 'Post Two', body: 'This is a post 2'},
]

/**
 * Print in the DOM all posts, each one wait 1 second to be posted.
 */
function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post, callback) {
    setTimeout(() => {
        let newPost = {title: post.title, body: post.body };
        posts.push(newPost);
        callback();
    }, 2000);
}

// async / await
// This run asyncronous, watching createPost
async function init() {
    await createPost({ title: "k", body: 'rh' }); // the function stop here, until the task is complete
    getPosts();
}

//async / awai / fetch
/**
 * Fetch the users and load into data in formt json
 */
async function loadUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await res.json();

    console.log(data);
}

// Execution
init();
loadUsers();