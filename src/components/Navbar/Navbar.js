import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-transparent absolute text-white px-32">
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case text-xl">daisyUI</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><Link>News</Link></li>
                    <li><Link>Destination</Link></li>
                    <li><Link>Blog</Link></li>
                    <li><Link>Contact</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;