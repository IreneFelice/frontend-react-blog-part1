import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar () {

    return (
        <ul>
            <li><NavLink to="/" className={({isActive}) => isActive ? 'active' : 'default'}>Home</NavLink></li>
            <li><NavLink to="/new-post" className={({isActive}) => isActive ? 'active' : 'default'}>New Post</NavLink></li>
            <li><NavLink to="/blog-overview" className={({isActive}) => isActive ? 'active' : 'default'}>Blog Overview</NavLink></li>
        </ul>

    )
}

export default NavBar;