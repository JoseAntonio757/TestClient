//import graphql 
import { gql } from '@apollo/client';

//export mutation  
export const ADD_USUARIO = gql`

mutation createUsuario(
        $nombre: String!
        $segundonombre: String
        $apellidopaterno: String!
        $apellidomaterno: String!
        $fechanacimiento: String!
        $email: String!
        $telefono: String!
) {
        createUsuario(
        nombre: $nombre
        segundonombre: $segundonombre
        apellidopaterno: $apellidopaterno
        apellidomaterno: $apellidomaterno
        fechanacimiento: $fechanacimiento
        email: $email
        telefono: $telefono
       ) {
         email
     }
 }    
`;