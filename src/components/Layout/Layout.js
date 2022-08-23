import { NavLink, Outlet } from 'react-router-dom';
import s from './Layout.module.css'

const Layout = () => {
    return (
        <div className={s.Layout}>
            <header className={s.wrapper}>
                <nav className={s.nav}>
                    <NavLink to="/" className={s.title}><p>Home</p></NavLink>
                    <NavLink to="/movies" className={s.title}><p>Movies</p></NavLink>
                </nav>
            </header>
            <main className={s.container}>
                <Outlet />
            </main>
            <footer className={`${s.wrapper} ${s.footer}`}>
                <div className={s.container}>
                    <p className={s.text}>Kyiv city. 2022</p>
                </div>
            </footer>
        </div>
    )
}

export { Layout };