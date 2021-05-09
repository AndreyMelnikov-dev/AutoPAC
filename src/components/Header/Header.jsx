import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import ava from './avatar.png';

const Header = () => {
    return (
        <header className={s.header_wrapper}>
            <nav className={s.header_nav}>
                <NavLink to="/" className={s.header_link}>Главная</NavLink>
                <NavLink to="/ProjectsList" className={s.header_link}>Проекты</NavLink>
            </nav>
            <div className={s.header_profile}>
                <h2 className={s.profile_name}>User Name</h2>
                <img src={ava} className={s.profile_avatar} />
            </div>
        </header>
    )
}

export default Header