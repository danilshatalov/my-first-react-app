import style from './MyPosts.module.css'
import Post from './Post/Post';

function MyPosts() {

    let postData = [
        { id: 1, message: 'Hey, I am here', likesCount: '2 likes' },
        { id: 2, message: 'What is going on?', likesCount: '1 like' },
        { id: 3, message: 'What is your favorite color?', likesCount: '8 likes' },
    ];

    return (
        <div className={style.postsBlock}>
            <h2>My posts</h2>
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={style.posts}>
                <Post message={postData[0].message} likesCounter={postData[0].likesCount} />
                <Post message={postData[1].message} likesCounter={postData[1].likesCount} />
                <Post message={postData[2].message} likesCounter={postData[2].likesCount} />
            </div>
        </div>
    );
}

export default MyPosts;