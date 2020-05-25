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
            <h2>Actividades:</h2>
           

        
        <div className="Actividades">
        
             {props.Actividades?.map(actividad => <div className="actividad" key={actividad._id}>
                <img src={actividad.image_path} alt=""/>
                <span className="nombreActividad"><strong>{actividad.name}</strong></span>
                <span> => </span>
                {/* <span className="nombreEntrenador">{actividad.trainer}</span> */}
                <span className="dias">{actividad.day}</span>
                <span> => </span>
                <span className="horario">{actividad.horario}</span>
                <span> => </span>
                <span className="precio">{actividad.price} €/mes</span>
               
            </div>)} 
        </div>

        </Fragment>

    )
}
const mapStateToProps = (state) => ({Actividades:state.actividad.actividades})
export default connect(mapStateToProps)(Actividades)