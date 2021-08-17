import React, { useContext } from 'react';

//importar style de component nombre
import {
    ContenedorPrincipal,
    ContenedorError,
    ContenedorBotom,
    Boton,
    Error,
    VerificarDatos,
    ParrafoDatos
} from '../nombre/Nombre';

//Rebbas 
import { Box } from 'rebass';

//Context
import FormularioContext from '../../context/formularioContext/formularioContext';



const FechaNacimiento = () => {

    //Extraer state del context 
    const formularioContext = useContext(FormularioContext);
    const { estadonombre, data, onChangeNombre, nombreError, nombreExito, verFecha } = formularioContext;

    //aplicar array destructuring
    const { dia, mes, año } = data;

    //funcion onSubmit
    const onSubmitFecha = e => {
        e.preventDefault();
        //Validar Datos 
        if (dia === '' || mes.trim() === '' || año === '') {
            //formulario error
            nombreError();
            return;
        }
        //formulario exito
        nombreExito();
        verFecha();
    }


    return (
        <ContenedorPrincipal>
            <h3>¿Cúal es tu fecha de Nacimiento?</h3>

            <form
                onSubmit={onSubmitFecha}
            >
                <Box>
                    <div className='form__group' >
                        <input
                            className='form__input'
                            type="number"
                            id="dia"
                            placeholder="Dia"
                            required=""
                            name='dia'
                            value={dia}
                            onChange={onChangeNombre}

                        />
                        <label className='form__label' htmlFor="dia" >Dia </label>

                        <input
                            className='form__input'
                            type="text"
                            id="mes"
                            placeholder="Mes"
                            required=""
                            name='mes'
                            value={mes}
                            onChange={onChangeNombre}
                        />
                        <label className='form__label' htmlFor="mes" >Mes</label>

                        <input
                            className='form__input'
                            type="number"
                            id="año"
                            placeholder="Año"
                            required=""
                            name='año'
                            value={año}
                            onChange={onChangeNombre}
                        />
                        <label className='form__label' htmlFor="paterno" >Año</label>

                    </div>

                    < VerificarDatos>
                        <ParrafoDatos>
                            {`${dia}  ${mes} ${año}`}
                        </ParrafoDatos>
                    </VerificarDatos>
                    <ContenedorError>
                        {estadonombre ? <Error> Todos los campos son obligatorios !</Error> : null}
                    </ContenedorError>

                    <ContenedorBotom>

                        <Boton
                            type='submit'
                            value='Next'
                        />

                    </ContenedorBotom>

                </Box>

            </form>
        </ContenedorPrincipal>
    );
}

export default FechaNacimiento;
