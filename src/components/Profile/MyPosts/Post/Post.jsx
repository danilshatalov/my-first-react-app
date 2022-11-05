import style from './Post.module.css'



function Post(props) {
    return (
        <div className={style.item}>
            <img src={require("../../../../img/avatar.png")} />
            {props.message}
            <div>
                {props.likesCounter}
            </div>
        </div>
    );
}

export default Post;