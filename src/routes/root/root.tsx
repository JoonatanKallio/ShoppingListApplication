import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

export default function Root() {
    return (
        <>
            <Navbar isAuthenticated={false} />
            <div>
                <h1>Hello world!</h1>
                <Outlet />
            </div>
        </>
    );
}
