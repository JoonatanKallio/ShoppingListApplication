import { Button, Heading } from '@radix-ui/themes';
import './Navbar.scss';
import { Home, KeyRound, List, LogIn, NotebookTabs, User } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import NavbarDropdown from './NavbarDropdown';

interface NavbarProps {
    isAuthenticated: boolean;
}

export default function Navbar({ isAuthenticated }: NavbarProps) {
    const url = useLocation();
    const navigate = useNavigate();

    function isCurrent(name: string) {
        if (url.pathname === `/${name}`) {
            return 'solid';
        }
        return 'outline';
    }

    return (
        <nav className="navbar">
            <div className="navbar--wrapper">
                <div className="navbar--heading">
                    <NotebookTabs size={36} />
                    <Heading>ShoppingBuddy</Heading>
                </div>
                {isAuthenticated && (
                    <>
                        <div className="navbar--right-buttons">
                            <Button
                                variant={isCurrent('')}
                                onClick={() => navigate('/')}
                            >
                                <Home />
                                Home
                            </Button>
                            <Button
                                variant={isCurrent('lists')}
                                onClick={() => navigate('/lists')}
                            >
                                <List />
                                Lists
                            </Button>
                            <Button
                                variant={isCurrent('profile')}
                                onClick={() => navigate('/profile')}
                            >
                                <User />
                                Profile
                            </Button>
                        </div>
                        <div className="navbar--right-dropdown">
                            <NavbarDropdown isAuthenticated />
                        </div>
                    </>
                )}
                {!isAuthenticated && (
                    <>
                        <div className="navbar--right-buttons">
                            <Button variant="outline">
                                <LogIn />
                                Login
                            </Button>
                            <Button>
                                <KeyRound />
                                Register
                            </Button>
                        </div>
                        <div className="navbar--right-dropdown">
                            <NavbarDropdown isAuthenticated={isAuthenticated} />
                        </div>
                    </>
                )}
            </div>
        </nav>
    );
}
