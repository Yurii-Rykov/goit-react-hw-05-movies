import { NavLink, Outlet } from 'react-router-dom';
import s from './Layout.module.css'

const Layout = () => {
    return(
        <>
        <header className={s.container}>
            <nav>
                <NavLink to="/" className={s.title}>Home</NavLink>
                <NavLink to="/movies">Movies</NavLink>
            </nav>
        </header>
        <main className={s.container}>
        <Outlet />
        </main>
        <footer className={s.container}>2022</footer>
        </>
    )
}

export {Layout};