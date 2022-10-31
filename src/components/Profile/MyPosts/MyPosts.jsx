import style from './MyPosts.module.css'
import Post from './Post/Post';

function MyPosts() {
    return (
        <div>
            my post
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <Post message='Hey, I am here' likesCounter='2 likes' />
            <Post message='What is going on?' likesCounter='1 like' />
            <Post message='What is your favorite color?' likesCounter='8 likes' />
        </div>
    );
}

export default MyPosts;