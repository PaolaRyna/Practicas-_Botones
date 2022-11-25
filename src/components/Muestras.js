import React from 'react'
import { StyleSheet, View, Text, Pressable } from 'react-native'

const Muestras = ({ item, setModalVisible,setReporte,reporteEditar, reporteEliminar, setmodalReporte }) => {

  const { namereporte, fecha, id } = item
  const formaterFecha = fecha => {
    const nuevaFecha = new Date(fecha)
    const opciones = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'

    }
    return nuevaFecha.toLocaleDateString('es-Es', opciones)
  }

  return (
    <Pressable
      onPress={() => {
        setmodalReporte(true)
        setReporte(item)
      }}
    >
      <View style={styles.contenedor}>
        <Text style={styles.label}>Reporte</Text>
        <Text style={styles.texto}>{namereporte}</Text>
        <Text style={styles.fecha}>{formaterFecha(fecha)}</Text>

        <View style={styles.contenedorBotones}>

          <Pressable
            style={[styles.btn, styles.btnEditar]}
            onPress={() => {
              setModalVisible(true)
              reporteEditar(id)

            }}
          >
            <Text style={[styles.btn, styles.btnTexto]}>
              Editar
            </Text>
          </Pressable>

          <Pressable
            style={[styles.btn, styles.btnEliminar]}
            onPress={() => reporteEliminar(id)}
          >
            <Text style={[styles.btn, styles.btnTexto]}>
              Eliminar
            </Text>
          </Pressable>

        </View>

      </View>
    </Pressable>

  )
}


const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#FFF',
    padding: 20,
    marginVertical:5
  },
  label: {
    color: '#5D5D5D',
    textTransform: 'uppercase',
    fontWeight: '900',
    marginBottom: 10,
    textAlign:'center',
    fontSize: 22
  },
  texto: {
    color: '#048ABF',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10
  },
  fecha: {
    color: '#374151',
    fontSize: 19
  },
  contenedorBotones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  btn: {
    paddingVertical: 5,
    paddingHorizontal:20,
    borderRadius: 5
  },
  btnEditar: {
    backgroundColor: '#8FBF26'
  },
  btnEliminar: {
    backgroundColor: '#E50D3C'
  },
  btnTexto: {
    textTransform: 'uppercase',
    fontWeight: '700',
    fontSize: 15,
    color: '#FFF'
  }

})


export default Muestras