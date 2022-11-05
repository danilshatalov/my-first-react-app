import style from './MyPosts.module.css'
import Post from './Post/Post';

function MyPosts(props) {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCounter={p.likesCount} />)

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