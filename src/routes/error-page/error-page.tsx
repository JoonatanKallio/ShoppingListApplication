import { useRouteError } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

export default function ErrorPage() {
    const error = useRouteError();

    return (
        <>
            <Navbar isAuthenticated />
            <div className="error-page">
                <h1>Oopsie!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </>
    );
}
