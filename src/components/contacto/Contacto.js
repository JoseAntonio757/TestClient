import React, { useContext } from 'react';

//importar stylos de Nombre
import {
    ContenedorPrincipal,
    ContenedorError,
    ContenedorBotom,
    Boton,
    Error,
    VerificarDatos,
    ParrafoDatos
} from '../nombre/Nombre';

//Import rebbas 
import { Box } from 'rebass';

//importacion del  context 
import FormularioContext from '../../context/formularioContext/formularioContext';

//Import Mutation 
import { ADD_USUARIO } from '../../graphql/mutation';

import { useMutation } from '@apollo/client';


const Contacto = () => {

    //Obtener state del context
    const formularioContext = useContext(FormularioContext);
    const { data, botton, estadonombre, onChangeNombre, nombreError, nombreExito, insertarCampos } = formularioContext;

    //Array destroction
    const { nombre, segundonombre, paterno, materno, email, telefono, dia, mes, año } = data;
    const fecha = dia + ' ' + mes + ' ' + año;

    //crear el useMutation
    const [createUsuario, { error, }] = useMutation(ADD_USUARIO);

    //Pasarle los valores a la mutation 
    const createUsuarMutation = () => {
        createUsuario({
            variables: {
                nombre: nombre,
                segundonombre: segundonombre,
                apellidopaterno: paterno,
                apellidomaterno: materno,
                fechanacimiento: fecha,
                email: email,
                telefono: telefono,
            },
        });

        if (error) {
            console.log(error);
        }
    }


    //Funcion Insert campos en BD
    const onSubmitContacto = e => {
        e.preventDefault();

        if (email.trim() === '' || telefono === '') {
            //formulario error
            nombreError();
            return;
        }
        //formulario exito
        nombreExito();
        //Crear un nuevo registro 
        insertarCampos();
        createUsuarMutation();

    }

    return (
        <ContenedorPrincipal>
            <h3>Datos de contacto</h3>

            <form
                onSubmit={onSubmitContacto}
            >
                <Box>
                    <div className='form__group' >
                        <input
                            className='form__input'
                            type="email"
                            id="email"
                            placeholder="Correo electrónico"
                            required=""
                            name='email'
                            value={email}
                            onChange={onChangeNombre}

                        />
                        <label className='form__label' htmlFor="email" >Dia </label>

                        <input
                            className='form__input'
                            type="tel"
                            id="telefono"
                            placeholder="Teléfono celular"
                            required=""
                            name='telefono'
                            value={telefono}
                            onChange={onChangeNombre}
                        />
                        <label className='form__label' htmlFor="telefono" >Teléfono celular</label>

                    </div>

                    <VerificarDatos>
                        <ParrafoDatos>
                            {`${nombre} ${segundonombre} ${paterno} ${materno}`}
                        </ParrafoDatos>
                        <ParrafoDatos>
                            {`${fecha} `}
                        </ParrafoDatos>
                        <ParrafoDatos>
                            {`${email}`}
                        </ParrafoDatos>
                        <ParrafoDatos>
                            {`${telefono}`}
                        </ParrafoDatos>
                    </VerificarDatos>

                    {telefono !== '' ? <VerificarDatos>
                        <ParrafoDatos>Si tus datos son correctos por favor continuemos</ParrafoDatos>
                    </VerificarDatos> : null}

                    <ContenedorError>
                        {estadonombre ? <Error> Todos los campos son obligatorios !</Error> : null}
                    </ContenedorError>

                    <ContenedorBotom >

                        {botton ? <Boton
                            type='submit'
                            value='Iniciar'
                        /> : null}

                    </ContenedorBotom>



                </Box>

            </form>
        </ContenedorPrincipal>
    );
}


export default Contacto;
