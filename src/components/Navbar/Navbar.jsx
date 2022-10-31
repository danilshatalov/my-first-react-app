import style from './Navbar.module.css';
import { NavLink } from 'react-router-dom';


function Navbar() {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to='/profile' className={navData => navData.isActive ? style.activeLink : style.item}>Profile</NavLink >
            </div>
            <div className={style.item}>
                <NavLink to='/dialogs' className={navData => navData.isActive ? style.activeLink : style.item}>Messages</NavLink >
            </div>
            <div className={style.item}>
                <NavLink to='/news' className={navData => navData.isActive ? style.activeLink : style.item}>News</NavLink>
            </div>
            <div className={style.item}>
                <a href='/music'>Music</a>
            </div>
            <div className={style.item}>
                <a href='/settings'>Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;