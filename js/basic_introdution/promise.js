const posts = [
    {title: 'Post One', body: 'This is a post 1'},
    {title: 'Post Two', body: 'This is a post 2'},
]

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

/**
 * 
 * @param { JSON Object } post 
 * The post will be added to posts and then the callback will be called 
 * The function usual pass is the getPost to refresh the posts in DOM. 
 * 
 */
function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let newPost = {title: post.title, body: post.body };
            posts.push(newPost);
            
            const error = false;

            if(!error) {
                resolve();
            } else {
                reject("error: 404");
            }
        }, 2000);
    });
}

// Execution
getPosts();
createPost({
        title: 'oi', body: 'ahahah', lixo: 'Will I overflow?'
    })
    .then(getPosts)
    .catch(e => {
        console.log(e);
    });

