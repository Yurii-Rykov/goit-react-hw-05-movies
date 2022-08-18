import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
    return(
        <>
        <header>
            <Link to='/'>Home</Link>
            <Link to='/Movies'>Movies</Link>
        </header>

        <Outlet />

        <footer>2022</footer>
        </>
    )
}

export {Layout};