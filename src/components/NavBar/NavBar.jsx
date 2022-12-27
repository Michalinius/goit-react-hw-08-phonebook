import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../Menu/Menu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../../hooks';
import css from './NavBar.module.css';

export const NavBar = () => {
    const { isLoggedIn } = useAuth();

    return (
        <header className={css.header}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    );
};
