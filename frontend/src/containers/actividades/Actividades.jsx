import React, { useEffect, Fragment } from 'react'
import { getAllActividades } from '../../redux/actions/actividades'
import {connect} from 'react-redux';
import './Actividades.scss';

const Actividades = (props) => {
const listaActividades = []
    useEffect(() => { // useEffect ????
        getAllActividades()
        .then(res =>res.data = listaActividades)
        .catch(console.error)
        console.log(props)
    }, [])
    return (
        <Fragment>
            <h2>Actividades:</h2>
        <div className="activities">
             {props.Actividades?.map(actividad => <div className="activity" key={actividad._id}>
                <img src={actividad.image_path} alt=""/>
                <span className="activityName"><strong>{actividad.name}</strong></span>
                <span> => </span>
                {/* <span className="nombreEntrenador">{actividad.trainer}</span> */}  
                <span className="days">{actividad.day}</span>
                <span> => </span>
                <span className="time">{actividad.horario}</span>
                <span> => </span>
                <span className="price">{actividad.price} €/mes</span>
            </div>)} 
        </div>
        </Fragment>
    )
}
const mapStateToProps = (state) => ({Actividades:state.actividad.actividades})
export default connect(mapStateToProps)(Actividades)