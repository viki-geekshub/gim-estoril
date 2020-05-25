import React, { useEffect, Fragment } from 'react'
import { getAllOfertas } from '../../redux/actions/ofertas'
import {connect} from 'react-redux';
import './Ofertas.scss';

const Ofertas = (props) => {
const listaOfertas = []
    useEffect(() => {
        getAllOfertas()
        .then(res =>res.data = listaOfertas)
        .catch(console.error)
        console.log(props)
    }, [])
    return (

        <Fragment>
            <h2>Ofertas:</h2>
        <div className="Ofertas">
        
             {props.Ofertas?.map(oferta => <div className="oferta" key={oferta._id}>
                <img src={oferta.image_path} alt=""/>
                <span className="nombreOferta"><strong>{oferta.offer}</strong></span>
                <span> => </span>
                <span className="precio">{oferta.price} €/mes</span>
                <span> => </span>
                <span className="caducidad">{oferta.expiration}</span>
               
            </div>)} 
        </div>

        </Fragment>

    )
}
const mapStateToProps = (state) => ({Ofertas:state.oferta.ofertas})
export default connect(mapStateToProps)(Ofertas)