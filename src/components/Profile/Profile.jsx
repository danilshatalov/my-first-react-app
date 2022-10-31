import MyPosts from './MyPosts/MyPosts';
import style from './Profile.module.css'

function Profile() {
    return (
        <div>
            <div>ava + discription</div>
            <MyPosts />
        </div>
    );
}

export default Profile;