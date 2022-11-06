import React from 'react';
import style from './MyPosts.module.css'
import Post from './Post/Post';

function MyPosts(props) {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCounter={p.likesCount} />)


    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }

    return (
        <div className={style.postsBlock}>
            <h2>My posts</h2>
            <div>
                <textarea ref={newPostElement}></textarea>
                <button onClick={addPost}>Add post</button>
                <button>Remove</button>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;