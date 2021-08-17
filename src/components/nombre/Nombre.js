import React, { useContext } from 'react';

//Styled 
import styled from 'styled-components';

//import Rebass
import { Box } from 'rebass';

//Import Context
import FormularioContext from '../../context/formularioContext/formularioContext';

const Nombre = () => {


    //Extraer Valores del state 
    const formularioContext = useContext(FormularioContext);
    const { estadonombre, data, onChangeNombre, nombreExito, nombreError, verNombre } = formularioContext;

    //Aplicar array destructuring
    const { nombre, segundonombre, paterno, materno } = data;


    //Cunado el usuario de submit en next 
    const onSubmitNombre = e => {
        e.preventDefault();

        //Validar Datos 
        if (nombre.trim() === '' || paterno.trim() === '' || materno.trim() === '') {
            //formulario Error
            nombreError();
            return;
        }
        //Formulario Exito
        nombreExito();
        verNombre();
    }

    return (
        <ContenedorPrincipal>
            <h3>¿Cúal es tu nombre?</h3>

            <form
                onSubmit={onSubmitNombre}
            >
                <Box>
                    <div className='form__group' >
                        <input
                            className='form__input'
                            type="text" id="name"
                            placeholder="Nombre"
                            required=""
                            name='nombre'
                            value={nombre}
                            onChange={onChangeNombre}

                        />
                        <label className='form__label' htmlFor="name" >Nombre</label>

                        <input
                            className='form__input'
                            type="text" id="segundo"
                            placeholder="Segundo Nombre"
                            required=""
                            name='segundonombre'
                            value={segundonombre}
                            onChange={onChangeNombre}
                        />
                        <label className='form__label' htmlFor="segundo" >Segundo Nombre</label>

                        <input
                            className='form__input'
                            type="text" id="paterno"
                            placeholder="Apellido Paterno"
                            required=""
                            name='paterno'
                            value={paterno}
                            onChange={onChangeNombre}
                        />
                        <label className='form__label' htmlFor="paterno" >Apellido Paterno</label>

                        <input
                            className='form__input'
                            type="text" id="materno"
                            placeholder="Apellido Materno"
                            required=""
                            name='materno'
                            value={materno}
                            onChange={onChangeNombre}
                        />
                        <label className='form__label' htmlFor="paterno" >Apellido Materno</label>
                    </div>

                    <VerificarDatos>
                        <ParrafoDatos>
                            {`${nombre} ${segundonombre} ${paterno} ${materno}`}
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

export const VerificarDatos = styled.div`
text-align: right;
`;

export const ParrafoDatos = styled.p`
     margin-top: 5px;
     font-weight: 400;
     font-size: 10pt;
     color: #FF98A4;
     margin-bottom: 0;
`;

export const ContenedorPrincipal = styled.div`

`;
export const ContenedorError = styled.div`
text-align: right;
`;
export const Error = styled.p`
     margin-top: 5px;
     font-weight: 400;
     font-size: 8pt;
     color: red;
     margin-bottom: 0;

`;

export const Boton = styled.input`
                    background-color: #FF98A4;
                    font-weight: 600;
                    font-size: 16pt;
                    width: auto;
                    color: #383F46;
                    border: none;
                    padding: 10px;
                    border-radius: 10px;
                    transition: background-color .3s ease;
                    margin-top: 2rem;
                    &:hover {
                        background-color: #FFC2C9;
                    cursor: pointer;
                    }
                    `;

export const ContenedorBotom = styled.div`
  text-align: right;
`;

export default Nombre
