import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './Header.scss';
import { logout } from '../../redux/actions/users';
const Header = props => {
    return <header className="header">
    <NavLink to='/home' exact>Home</NavLink>
    <NavLink to='/nuestrahistoria' exact>Nuestra Historia</NavLink>
    <NavLink to='/dondeestamos' exact>Donde Estamos</NavLink>
    <NavLink to='/claseshorarios' exact>Clases y Horarios</NavLink>
    <NavLink to='/preciosofertas' exact>Precios y Ofertas</NavLink>
    <NavLink to='/instalaciones' exact>Instalaciones</NavLink>
    <NavLink to='/postlist' exact>Foro</NavLink>
    <NavLink to='/contacto' exact>Contacto</NavLink>
   

        {!props.user ?
            <div className="guestZone">
            <NavLink to='/login' exact>Login</NavLink>
            <NavLink to='/register' exact>Register</NavLink>
            </div> : props.user.role === "admin" ? <div className="userAdmin">
            <NavLink to='/users' exact>Users</NavLink>
            <NavLink to='/profile' exact>{props.user.name}</NavLink>
            <button className="logout" onClick={logout}>Logout</button>
            </div> : <div className="userZone">
            <NavLink to='/profile' exact>{props.user.name}</NavLink>
            <button className="logout" onClick={logout}>Logout</button>
                
            </div>}
    </header>
}
const mapStateToProps = (state) => ({ user: state.user.user });
export default connect(mapStateToProps)(Header);