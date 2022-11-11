
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, StyleSheet, Pressable, Modal, FlatList, Alert, View } from 'react-native'
import Formulario from '../components/Formulario';
import Muestras from '../components/Muestras';
import InfoReporte from '../components/InfoReporte';

export const Tab1Screen = () => {

  // los hook se colocan aquí
  const [modalVisible, setModalVisible] = useState(false)
  const [reportes, setReportes] = useState([])
  const [reporte, setReporte] = useState({})
  const [modalReporte, setmodalReporte] = useState(false)

  const reporteEditar = id => {
    //console.log('editando....', id)
    const reporteEditar = reportes.filter(reporte => reporte.id === id)
    setReporte(reporteEditar[0])
  }

  const reporteEliminar = id => {
    //console.log('eliminando....', id)
    Alert.alert(
      'Un reporte eliminado no se puede recuperar',
      '¿Deseas eliminar este reporte?',
      [
        {
          text: 'Cancelar'
        },
        {
          text: 'Eliminar', onPress: () => {
            // console.log('eliminando')
            const reportesActualizados = reportes.filter(reportesState => reportesState.id !== id)
            // console.log(reportesActualizados)
            setReportes(reportesActualizados)
          }
        }
      ]
    )

  }

  const cerrarModal = () => {
    setModalVisible(false)
  }

  return (

    <SafeAreaView style={styles.container}>
      <View style={styles.reporton}>
        <Text style={styles.tituloreport}> Report on </Text>
      </View>


      <Text style={styles.titulo}>
        Planificador de Reportes {''}
        <Text style={styles.tituloBold} >UTVT</Text>
      </Text>

      <Pressable
        onPress={() => setModalVisible(!modalVisible)}
        style={styles.btnNuevoReporte}
      >
        <Text
          style={styles.btnTextoNuevoReporte}
        >
          Generar Reporte
        </Text>
      </Pressable>

      {reportes.length === 0 ?
        <Text style={styles.sinReportes}>No hay Reportes</Text> :
        <FlatList
          style={styles.listado}
          data={reportes}
          keyExtractor={(item) => item.id} // busca en el arrglo un valor unico
          renderItem={({ item }) => {      //los componentes q se van a mostrar

            return (
              <Muestras
                item={item}
                setModalVisible={setModalVisible}
                setReporte={setReporte}
                reporteEditar={reporteEditar}
                reporteEliminar={reporteEliminar}
                setmodalReporte={setmodalReporte}
              />
            )

          }}
        />
      }

      {modalVisible && (
        <Formulario
          cerrarModal={cerrarModal}
          reportes={reportes}
          setReportes={setReportes}
          reporte={reporte}
          setReporte={setReporte}
        />
      )}

      <Modal
        visible={modalReporte}
        animationType='slide'
      >
        <InfoReporte
          reporte={reporte}
          setReporte={setReporte}
          setmodalReporte={setmodalReporte}
        />
      </Modal>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  titulo: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 30,
    color: '#5D5D5D',
    fontWeight: '600',
  },
  container: {
    backgroundColor: '#F3F4F6',
    flex: 10
  },
  tituloBold: {
    fontWeight: '800',
    color: '#048ABF'
  },
  btnNuevoReporte: {
    backgroundColor: '#FFA800',
    padding: 15,
    marginTop: 40,
    marginHorizontal: 40,
    borderRadius: 20

  },
  btnTextoNuevoReporte: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: '900',
    textTransform: 'uppercase'
  },
  sinReportes: {
    marginTop: 50,
    textAlign: 'center',
    fontSize: 30,
    color: '#8FBF26',
    fontWeight: '700'
  },
  listado: {
    marginTop: 50,
    marginHorizontal: 30
  },
  reporton: {
    fontWeight: '700',
    textAlign: 'left',
    fontSize: 28,
    backgroundColor: '#048ABF',
    padding: 10

  },
  tituloreport: {
    fontWeight: '700',
    color: '#FFFFFF',
    fontSize: 30
  }

})