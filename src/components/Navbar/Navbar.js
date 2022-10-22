import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut=()=>{
        logOut()
        .then(()=>{})
        .catch(e=>console.error(e))
    }
    return (
        <div className="navbar bg-transparent absolute text-gray-300 px-32">
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case text-xl">BD-Travel</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><Link>News</Link></li>
                    <li><Link>Destination</Link></li>
                    <li><Link>Blog</Link></li>
                    <li><Link>Contact</Link></li>
                    {
                        user?.email ?
                            <li>
                                <li className='font-semibold text-gray-700'>{user?.displayName}</li>
                                <li><button onClick={handleLogOut} className="btn btn-outline-primary">Log Out</button></li>
                            </li>
                            :
                            <li><Link to='/login'><button type="button" className="btn btn-outline-primary">Login</button>
                            </Link></li>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;