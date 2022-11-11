import React from 'react'
import { Text, View, Pressable, StyleSheet } from 'react-native'
import { formatearFecha } from '../helpers'

const infoReporte = ({ reporte, setReporte, setmodalReporte }) => {

    //console.log(reporte)
    return (
        <View style={styles.contenedor}>

            <Text style={styles.titulo}>Informacion del {''}
                <Text style={styles.tituloBold}>Reporte</Text>
            </Text>

            <View
                style={styles.contenido}
            >
                <View style={styles.campo}>
                    <Text style={styles.label}>Reporte:</Text>
                    <Text style={styles.valor}>{reporte.namereporte}</Text>
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Alumno:</Text>
                    <Text style={styles.valor}>{reporte.namereporte}</Text>
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Email:</Text>
                    <Text style={styles.valor}>{reporte.email}</Text>
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Teléfono:</Text>
                    <Text style={styles.valor}>{reporte.telefono}</Text>
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Fecha Alta:</Text>
                    <Text style={styles.valor}>{formatearFecha(reporte.fecha)}</Text>
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Descripción:</Text>
                    <Text style={styles.valor}>{reporte.descripcion}</Text>
                </View>
            </View>

            <Pressable
                style={styles.btnCerrar}
                onPress={() => {
                    setmodalReporte(false)
                    setReporte({})
                }}
            >
                <Text
                    style={styles.btnCerrarTexto}
                >Cerrar</Text>
            </Pressable>

        </View>

    )
}

const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: '#5D5D5D',
        flex: 1
    },

    tituloreport: {
        fontWeight: '700',
        color: '#FFFFFF',
        fontSize: 30
    },

    reporton: {
        fontWeight: '500',
        textAlign: 'left',
        fontSize: 20,
        backgroundColor: '#048ABF',
        padding: 10

    },
    titulo: {
        fontSize: 35,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 35,
        color: '#FFF'
    },
    tituloBold: {
        fontWeight: '900',
        colo: '#E54242'
    },
    btnCerrar: {
        marginVertical: 1,
        backgroundColor: '#E50D3C',
        marginHorizontal: 90,
        padding: 15,
        borderRadius: 10,
    },
    btnCerrarTexto: {
        color: '#FFF',
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 20,
        textTransform: 'uppercase',
    },
    contenido: {
        marginVertical: 20,
        backgroundColor: '#FFF',
        marginHorizontal: 30,
        borderRadius: 20,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 50,
    },
    campo: {
        marginBottom: 20,
        fontWeight: '900',
        textTransform: 'uppercase',

    },
    label: {
        textTransform: 'uppercase',
        color: '#374151',
        fontWeight: '400',
        fontSize: 18
    },
    valor: {
        fontWeight: '700',
        fontSize: 20,
        color: '#334155'
    }
})

export default infoReporte