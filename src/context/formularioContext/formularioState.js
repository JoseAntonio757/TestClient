import React, { useReducer, useState } from 'react';

//import de context y reducer 
import FormularioContext from './formularioContext';
import FormularioReducer from './formularioReducer';

//Import types
import {
    NOMBRE_EXITO,
    NOMBRE_ERROR,
    SET_DATOS,
    VER_FECHA,
    INSERTAR_CAMPOS
} from '../../types';

//state inicial 
const FormularioState = props => {
    const initialState = {
        estadonombre: false,
        vernombre: true,
        verfecha: false,
        vercontacto: false,
        botton: true,
        porcentaje: true,
        porcentajefecha: false,
        porcentajecontacto: false,
    }

    //satate del Formulario
    const [data, setData] = useState({
        nombre: '',
        segundonombre: '',
        paterno: '',
        materno: '',
        dia: '',
        mes: '',
        año: '',
        email: '',
        telefono: ''
    });

    //inicializar use reducer
    const [state, dispatch] = useReducer(FormularioReducer, initialState);

    //formulario error
    const nombreError = () => {
        dispatch({
            type: NOMBRE_ERROR
        });
    }

    //formulario exito
    const nombreExito = () => {
        dispatch({
            type: NOMBRE_EXITO
        });
    }

    //ver componenet nombre
    const verNombre = () => {
        dispatch({
            type: SET_DATOS,
            payload: false
        })
    }

    //ver componenet fecha
    const verFecha = () => {
        dispatch({
            type: VER_FECHA,
            payload: false
        })
    }

    //LLenar el formulario deacuerdo al name
    const onChangeNombre = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    //insertar campos 
    const insertarCampos = () => {

        dispatch({
            type: INSERTAR_CAMPOS
        })
    }

    return (

        <FormularioContext.Provider
            value={{
                estadonombre: state.estadonombre,
                vernombre: state.vernombre,
                verfecha: state.verfecha,
                vercontacto: state.vercontacto,
                porcentaje: state.porcentaje,
                porcentajefecha: state.porcentajefecha,
                porcentajecontacto: state.porcentajecontacto,
                botton: state.botton,
                data,
                nombreExito,
                nombreError,
                verNombre,
                verFecha,
                onChangeNombre,
                insertarCampos
            }}
        >
            {props.children}
        </FormularioContext.Provider>
    );

}

export default FormularioState;