import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import './index.scss';

import Header from './components/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './containers/user/Login/Login';
import Register from './containers/user/Register/Register';
import Profile from './containers/user/Profile/Profile';
import NuestraHistoria from './containers/nuestraHistoria/NuestraHistoria';
import DondeEstamos from './containers/dondeEstamos/DondeEstamos';
import User from './containers/user/User/User';
import PostList from './containers/post/Posts/PostList';
import UserList from './containers/user/Users/UserList';
import Instalaciones from './containers/instalaciones/Instalaciones';
import Actividades from './containers/actividades/Actividades';
import Ofertas from './containers/ofertas/Ofertas';
import Inicio from './containers/inicio/Inicio';
import Contacto from './containers/contacto/Contacto';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' component={Inicio} exact />
          <Route path='/history' component={NuestraHistoria} exact />
          <Route path='/location' component={DondeEstamos} exact />
          <Route path='/activities' component={Actividades} exact />
          <Route path='/offers' component={Ofertas} exact />
          <Route path='/instalations' component={Instalaciones} exact />
          <Route path='/contact' component={Contacto} exact />
          <Route path='/postlist' component={PostList} exact />
          <Route path='/users' component={UserList} exact />
          <Route path='/profile' component={Profile} exact />
          <Route path='/user/:id' component={User} exact />
          <Route path='/login' component={Login} exact />
          <Route path='/register' component={Register} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;