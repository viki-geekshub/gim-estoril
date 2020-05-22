import React, { Fragment } from 'react';
import HeaderAdmin from '../components/HeaderAdmin.jsx';
import HeaderUser from '../components/HeaderUser.jsx';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      user: 'customer',
    }
  }
  render(){
    return(
      <Fragment>
             {
                 (this.state.user === 'admin')
                 ? <HeaderAdmin />
                 : <HeaderUser />
             }

                <footer>Aquí va el footer</footer>
      </Fragment>
    )
  }
}

export default App;