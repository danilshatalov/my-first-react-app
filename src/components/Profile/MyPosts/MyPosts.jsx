import style from './MyPosts.module.css'
import Post from './Post/Post';

function MyPosts() {

    let posts = [
        { id: 1, message: 'Hey, I am here', likesCount: '2 likes' },
        { id: 2, message: 'What is going on?', likesCount: '1 like' },
        { id: 3, message: 'What is your favorite color?', likesCount: '8 likes' },
        { id: 4, message: 'Him?', likesCount: '10 likes' }
    ];

    let postsElements = posts.map(p => <Post message={p.message} likesCounter={p.likesCount} />)

    return (
        <div className={style.postsBlock}>
            <h2>My posts</h2>
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;