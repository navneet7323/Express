async function getUserData() {
    try {
        const user = await getUser(1);
        const posts = await getUserPosts(user);
        return { user, posts };
    } catch (error) {
        console.error(error);
    }
}

// With Promise.all
async function getUserDataParallel() {
    try {
        const [user, posts] = await Promise.all([
            getUser(1),
            getPosts(1)
        ]);
        return { user, posts };
    } catch (error) {
        console.error(error);
    }
}
