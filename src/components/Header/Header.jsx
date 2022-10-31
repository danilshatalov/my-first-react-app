import style from './Header.module.css'

function Header() {
    return (
        <header className={style.header}>
            <img src={require("../../img/logo.png")} ></img>
        </header>
    );
}

export default Header;