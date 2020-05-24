import React, { useEffect, Fragment } from 'react'
import { getAllActividades } from '../../redux/actions/actividad'
import {connect} from 'react-redux';
import './Actividades.scss';

const Actividades = (props) => {
const listaActividades = []
    useEffect(() => {
        getAllActividades()
        .then(res =>res.data = listaActividades)
        .catch(console.error)
        console.log(props)
    }, [])
    return (

        <Fragment>
            <h2>Listado de actividades</h2>
            <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>acciones</th>


            </tr>

        
        <div className="Actividades">
        
             {props.Actividades?.map(actividad => <div className="actividad" key={actividad._id}>
                <span className="nombreActividad"><strong>{actividad.name}</strong></span>
                <img src={actividad.image_path} alt=""/>
                <span className="precio">{actividad.price} €</span>
               
            </div>)} 
        </div>

        </Fragment>

    )
}
const mapStateToProps = (state) => ({Actividades:state.actividad.actividades})
export default connect(mapStateToProps)(Actividades)