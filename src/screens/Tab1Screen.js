
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, StyleSheet, Pressable, Modal, FlatList, Alert, View } from 'react-native'
import { Avatar, HStack, Center, NativeBaseProvider } from "native-base";

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

        <Center>
      <Avatar.Group _avatar={{
      size: "lg"
    }} max={3}>
        <Avatar bg="green.500" source={{
        uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      }}>
          AJ
        </Avatar>
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
        <Avatar bg="green.500" source={{
        uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      }}>
          AJ
        </Avatar>
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
        uri: "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
       }}>
          TS
        </Avatar>
      </Avatar.Group>
    </Center>

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
    marginTop: 30,
    textAlign: 'center',
    fontSize: 30,
    color: '#5D5D5D',
    fontWeight: '600',
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
    marginTop: 40,
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