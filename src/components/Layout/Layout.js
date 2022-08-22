import { NavLink, Outlet } from 'react-router-dom';
import s from './Layout.module.css'

const Layout = () => {
    return (
        <>
            <header className={s.wrapper}>
                <nav className={s.nav}>
                    <NavLink to="/" className={s.title}><p>Home</p></NavLink>
                    <NavLink to="/movies" className={s.title}><p>Movies</p></NavLink>
                </nav>
            </header>
            <main className={s.container}>
                <Outlet />
            </main>
            <footer className={s.wrapper}>
                <div className={s.container}>
                    <p className={s.text}>Kyiv city. 2022</p>
                </div>
            </footer>
        </>
    )
}

export { Layout };