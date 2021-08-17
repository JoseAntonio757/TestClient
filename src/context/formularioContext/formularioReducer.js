import {
    NOMBRE_EXITO,
    NOMBRE_ERROR,
    SET_DATOS,
    VER_FECHA,
    INSERTAR_CAMPOS,
} from '../../types';

export default function formularioReducer(state, action) {
    switch (action.type) {

        case NOMBRE_EXITO:
            return {
                ...state,
                estadonombre: false

            }

        case NOMBRE_ERROR:
            return {
                ...state,
                estadonombre: true

            }

        case SET_DATOS:
            return {
                ...state,
                vernombre: action.payload,
                porcentaje: false,
                porcentajefecha: true,
                verfecha: true

            }
        case VER_FECHA:
            return {
                ...state,
                verfecha: action.payload,
                vercontacto: true,
                porcentajefecha: false,
                porcentajecontacto: true

            }

        case INSERTAR_CAMPOS:
            return {
                ...state,
                vercontacto: false,
                botton: false
            }

        default:
            return state;
    }
}