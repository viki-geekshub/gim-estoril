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
import ClasesHorarios from './containers/clasesHorarios/ClasesHorarios';
import PreciosOfertas from './containers/preciosOfertas/PreciosOfertas';
import Home from './containers/home/Home';
import Contacto from './containers/contacto/Contacto';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/postlist' component={PostList} exact />
          <Route path='/login' component={Login} exact />
          <Route path='/register' component={Register} exact />
          <Route path='/profile' component={Profile} exact />
          <Route path='/users' component={UserList} exact />
          <Route path='/user/:id' component={User} exact />
          <Route path='/nuestrahistoria' component={NuestraHistoria} exact />
          <Route path='/dondeestamos' component={DondeEstamos} exact />
          <Route path='/instalaciones' component={Instalaciones} exact />
          <Route path='/claseshorarios' component={ClasesHorarios} exact />
          <Route path='/preciosofertas' component={PreciosOfertas} exact />
          <Route path='/home' component={Home} exact />
          <Route path='/contacto' component={Contacto} exact />
          
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;