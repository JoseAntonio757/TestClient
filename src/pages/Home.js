import React, { useContext } from 'react';

//Imagenes 
import Registro from '../assets/register.png';
import ImagenA from '../assets/av-1.png';

//styled components
import styled from 'styled-components';

//Rebbas 
import { Box, Flex } from 'rebass';

//Components
import Nombre from '../components/nombre/Nombre';
import FechaNacimiento from '../components/fechaNacimiento/FechaNacimiento';
import Contacto from '../components/contacto/Contacto';

//Context
import FormularioContext from '../context/formularioContext/formularioContext';

//Apollo Client
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    HttpLink,
    from,
} from '@apollo/client';

//Apollo link error
import { onError } from "@apollo/client/link/error";

//Obtener errores de graphql
const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      console.log('graphQLErrors', graphQLErrors);
    }
    if (networkError) {
      console.log('networkError', networkError);
    }
  });

  //inicializar una ruta graphql
const Link = from([
    errorLink,
    new HttpLink({ credentials:'same-origin', uri:'http://localhost:4000/graphql'})
]);

//nuevo clinete apolloclient
const client = new ApolloClient({
    link: Link,
    cache: new InMemoryCache()
})

const Home = () => {

    //Extraer valores del context 
    const formularioContext = useContext(FormularioContext);
    const { botton, data, vernombre, verfecha, vercontacto, porcentaje, porcentajefecha, porcentajecontacto } = formularioContext;

    //Aplicar Array destructuring
    const { nombre, segundonombre, paterno, email, telefono, dia, mes, año } = data;

    return (
        <ApolloProvider client={client}>
            <Box
                p={4}
                fontSize={4}
                width={[1, 1, 1 / 2]}
                color='White'
                bg='#FF98A4'>
                Register <Icono />
                <Tiempo> En 5 minitus  </Tiempo>
            </Box>
            {porcentaje ? <Barra className='pasos'></Barra> : null}
            {porcentajefecha ? <Barra className='pasos1'></Barra> : null}
            {porcentajecontacto ? <Barra className='pasos2'></Barra> : null}

            {botton ? <ContenedorFormulario>
                <Flex>
                    <Box
                        p={2}
                        width={[1, 1, 1 / 4]}
                        color='black'
                        bg='primary'>
                        <Avatar />
                    </Box>
                    <Box
                        p={2}
                        width={[1, 1, 1 / 4]}
                        color='black'
                        bg='secondary'>
                        {vernombre ? <Nombre /> : null}
                        {verfecha ? <FechaNacimiento /> : null}
                        {vercontacto ? <Contacto /> : null}
                    </Box>
                </Flex>

            </ContenedorFormulario> :

                <ContenedorFormulario>
                    <Flex>
                        <Box
                            p={2}
                            width={[1, 1, 1 / 2]}
                            color='black'
                            bg='primary'>
                            <ImagenRegistro src={ImagenA} />
                        </Box>
                    </Flex>
                </ContenedorFormulario>


            }



            {botton ? null :
                <Informacion>
                    <Box
                        p={4}
                        fontSize={4}
                        width={[1, 1, 1 / 2]}
                        color='White'
                        bg='#FF98A4'>
                        {`Hi!!! ${nombre} ${segundonombre} ${paterno}`}
                        <Tiempo></Tiempo>
                        <Tiempo> {`Email: ${email}`}  </Tiempo>
                        <Tiempo> {`Telefono Celular: ${telefono}`}  </Tiempo>
                        <Tiempo> {`Fecha de nacimineto:  ${dia} ${mes} ${año}`}  </Tiempo>

                        <ContenedorEnlace> <Enlace href='/'>Reset</Enlace> </ContenedorEnlace>
                    </Box>
                </Informacion>
            }

        </ApolloProvider>
    );
}

function Icono() {
    return (
        <Imagen src={Registro} />
    );
}

function Avatar() {
    return (
        <ImagenAvatar src={ImagenA} />
    );
}

const ImagenRegistro = styled.img`
 width: 150px;
 margin:auto;
 display:block;
`;

const Imagen = styled.img`
 width: 30px;
`;

const Informacion = styled.div`
 margin-top: 120px;
 bottom: 0;
`;

const Enlace = styled.a`
 text-decoration: none;
 font-size: 20px;
 color: white;

 &:hover{
     color: white;
 }

`;

const ImagenAvatar = styled.img`
 width: 60px;
 margin:auto;
 display:block;
`;

const ContenedorFormulario = styled.div`
  margin-top: 30px;
`;
const ContenedorEnlace = styled.div`
text-align: right;
  margin-top: 5px;
`;

const Tiempo = styled.p`
margin-bottom: 10px;
font-weight: 400;
font-size: 8pt;

`;

const Barra = styled.div`
     left: 0;
     bottom: 0;
     background-color: #02D0F9;
     height: 10px;
     border-radius: .5rem;
`;



export default Home;
