// Asynchronous operations using `fetch`

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users => {
    const firstUser = users[0];
    console.log(firstUser);
    return fetch(
        'https://jsonplaceholder.typicode.com/posts?userId' + firstUser.id
    );
})
.then(response => response.json())
.then(posts => console.log(posts));

const myAsyncFunction = async() => {
    try {
        const usersResponse = await fetch(
            'https://jsonplaceholder.typicode.com/users'
        );
        const users = await usersResponse.json();

        const secondUser = users[1];
        console.log(secondUser);
        const postResponse = await(
            fetch('https://jsonplaceholdr.typicode.com/posts?userId' + secondUser.id)
        );
        const posts = await postResponse.json();
        console.log(posts);
    } catch(error) {
        console.log('there was an error');
    }
}

myAsyncFunction();
