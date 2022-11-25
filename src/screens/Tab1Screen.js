
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Pressable, Modal, FlatList, Alert, View } from 'react-native'
import { HStack, Center, Text, Avatar } from "native-base";


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
    <>
      <View style={styles.titulo}>
        <HStack justifyContent="space-between" space={"lg"}>
          <Text fontSize="3xl" bold italic color='#048ABF' >Reportes</Text>
          <Center>
            <Avatar.Group _avatar={{
              size: "md"
            }} max={2}>

              <Avatar bg="cyan.500" source={{
                uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              }}>
                TE
              </Avatar>
              <Avatar bg="indigo.500" source={{
                uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              }}>
                JB
              </Avatar>
              <Avatar bg="amber.500" source={{
                uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              }}>
                TS
              </Avatar>
            </Avatar.Group>
          </Center>
        </HStack>
      </View>

      <SafeAreaView>

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
    </>
  )
}

const styles = StyleSheet.create({
  titulo: {
    marginHorizontal: 15,
    marginVertical: 12,
  },
  header: {
    backgroundColor: 'cornflowerblue',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start'
  },
  container: {
    backgroundColor: '#ffffff',
    flex: 10
  },
  tituloBold: {
    fontWeight: '800',
    color: '#048ABF'
  },
  btnNuevoReporte: {
    backgroundColor: '#FFA800',
    padding: 15,
    marginVertical: 15,
    marginHorizontal: 90,
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
    marginTop: 10,
    textAlign: 'center',
    fontSize: 22,
    color: '#8FBF26',
    fontWeight: '700'
  },
  listado: {
    marginTop: 10,
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
    fontSize: 30,
    textAlign: 'left'
  }
})