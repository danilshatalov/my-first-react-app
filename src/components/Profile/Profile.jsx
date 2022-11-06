import MyPosts from './MyPosts/MyPosts';
import style from './Profile.module.css'
import ProfileInfo from '../Profile/ProfileInfo/ProfileInfo';

function Profile(props) {


    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.posts} addPost={props.addPost} />
        </div>
    );
}

export default Profile;