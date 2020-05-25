import React, { useEffect, Fragment } from 'react'
import { getAllActividades } from '../../redux/actions/actividades'
import {connect} from 'react-redux';
import './Actividades.scss';

const Actividades = (props) => {
const listaActividades = []
    useEffect(() => { // useEffect -> Es el ciclo de vida del componente. Solo se ejecuta cuando se monta el componente en este caso porque esta configurado asi ya que no hay ninguna funcion y hay una array vacio al final que es cuando se actualiza la informacion. solo se actualiza la primera vez
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
const mapStateToProps = (state) => ({Actividades:state.actividad.actividades}) // El mapStateToProps es una funcion de redux para convertir el estado en props. Le estamos diciendo que coja la actividad del estado y la meta en Actividades y que eso es el props.
export default connect(mapStateToProps)(Actividades) // Aquí conectamos el componente Actividades con las props que acabamos de crear

// Un componente puede heredar propiedades del padre directo que sería el App o del estado. Aquí es donde le decimos eso.