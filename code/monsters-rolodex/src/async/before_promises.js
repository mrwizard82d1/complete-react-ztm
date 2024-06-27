// **Very** difficult to read and debug
getUser('facebook/yihuazhang', (user, error) => {
    if(error) {
        throw(error);
    }

    const userId  = user.id;

    getFriends(userId, (friends, error) => {
        if(error) {
            throw(error)
        }

        const john = friends.find(/* */)

        getPosts(john, (posts, error) => {
            if(error) {
                throw(error)
            }

            const mostRecentPost = posts[0];

            getCommentsForPost(mostRecentPost, (comments, error) => {
                if(error) {
                    throw(error)
                }

                displayComments(comments);
            })
        })
    }) 
})
