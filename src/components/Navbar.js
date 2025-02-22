
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = (props) => {
    let navigate = useNavigate();
    let location = useLocation();
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
        props.salert("Logout Successfully" , "success");
    }
    
    return (

        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">iNotebook</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/"? "active":""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/About"? "active":""}`} to="/About">About</Link>
                        </li>

                    </ul>
                    {!localStorage.getItem('token') ? <form className="d-flex" role="search">
                    <Link className="btn btn-primary ms-2" to="/login" role="button">Login</Link>
                    <Link className="btn btn-primary ms-2" to="/signup" role="button">Signup</Link>
                    </form> : <button onClick={handleLogout} className='btn btn-primary'>Logout</button>}
                </div>
            </div>
        </nav>

    )
}

export default Navbar
