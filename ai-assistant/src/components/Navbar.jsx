import React  from 'react';
import { NavLink ,useNavigate} from 'react-router-dom';

export default function Navbar(){

    const navigate=useNavigate();

    const handleLogout=()=>{
        localStorage.removeItem('token');
        alert('Logged out successfully!!');
        navigate('/');
    };

    const isLoggedIn= !!localStorage.getItem('token');
    return(
        <nav className="navbar">
            <h1 className="logo">AI Assistant</h1>
            <div className="tabs">
                <NavLink to="/pdf" className="tab">PDF Summarizer</NavLink>
                <NavLink to="/code" className="tab">Code Generator</NavLink>

                {isLoggedIn?(
                    <button onClick={handleLogout} className='logout-btn'>Logout</button>
                ):(
                    <NavLink to="/auth" className="tab">Login</NavLink>
                )}
            </div>
        </nav>

    );
}