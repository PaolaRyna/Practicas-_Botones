import React, { useState, useEffect } from 'react'
import { Modal, StyleSheet, View, Text, TextInput, ScrollView, Alert } from 'react-native'
import DatePicker from 'react-native-date-picker'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'

const Formulario = ({
modalVisible,
cerrarModal,
  reportes,
  setReportes,
  reporte: reporteObj,
  setReporte: setReporteApp

}) => {


  const [namereporte, setnameReporte] = useState('')
  const [id, setId] = useState('')
  const [alumno, setAlumno] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')
  const [fecha, setFecha] = useState(new Date())
  const [descripcion, setDescripcion] = useState('')

  useEffect(() => {
    if (Object.keys(reporteObj).length > 0) {
      //console.log('si hay algo')
      setId(reporteObj.id)
      setnameReporte(reporteObj.namereporte)
      setAlumno(reporteObj.alumno)
      setEmail(reporteObj.email)
      setTelefono(reporteObj.telefono)
      setFecha(reporteObj.fecha)
      setDescripcion(reporteObj.descripcion)

    }
  }, [reporteObj])


  const handleReporte = () => {
    // Validar
    if ([namereporte, alumno, email, telefono, fecha, descripcion].includes('')) {
      Alert.alert ( 
        'Error',
        'Todos los campos son obligatorios',
        [{ text: 'Cancelar' }, { text: 'OK' }]
      )
      return
    }
    //verificar si es un registro nuevo o edicion

    const nuevoReporte = {
      namereporte,
      alumno,
      email,
      telefono,
      fecha,
      descripcion
    }

    if (id) {
      //editando
      nuevoReporte.id = id

      const reportesActualizados = reportes.map(reporteState =>
        reporteState.id === nuevoReporte.id ? nuevoReporte : reporteState)

      setReportes(reportesActualizados)
      setReporteApp({})

    } else {
      //nuevo reporte
      nuevoReporte.id = Date.now()
      setReportes([...reportes, nuevoReporte])
    }

    cerrarModal()
    setId('')
    setnameReporte('')
    setAlumno('')
    setEmail('')
    setTelefono('')
    setFecha(new Date())
    setDescripcion('')

  }

  return (
    <Modal
      animationType='slide' //fade
      visible={modalVisible}
    >
      <View style={styles.container}>
        <ScrollView>

          <Text style={styles.titulo}
          >{reporteObj.id ? 'Editar' : 'Nuevo'} {" "}
            <Text style={styles.tituloBold}>Reporte</Text>
          </Text>

          <Pressable
            style={styles.btnCancelar}
            onPress={() => {
              cerrarModal()
              setReporteApp({})
              setId('')
              setnameReporte('')
              setAlumno('')
              setEmail('')
              setTelefono('')
              setFecha(new Date())
              setDescripcion('')
            }}
          >
            <Text style={styles.btnCancelarTexto}>Cancelar</Text>
          </Pressable>


          <View style={styles.campo}>
            <Text style={styles.label}>Reporte</Text>
            <TextInput
              style={styles.input}
              placeholder='Nombre del Reporte'
              placeholderTextColor={'#666'}
              value={namereporte}
              onChangeText={setnameReporte}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Alumno</Text>
            <TextInput
              style={styles.input}
              placeholder='Nombre del alumno'
              placeholderTextColor={'#666'}
              value={alumno}
              onChangeText={setAlumno}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder='Email'
              placeholderTextColor={'#666'}
              keyboardType='email-address'
              value={email}
              onChangeText={setEmail}
            />
          </View>


          <View style={styles.campo}>
            <Text style={styles.label}>Teléfono</Text>
            <TextInput
              style={styles.input}
              placeholder='Teléfono'
              placeholderTextColor={'#666'}
              keyboardType='number-pad'
              value={telefono}
              onChangeText={setTelefono}
              maxLength={10}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Fecha Alta</Text>

            <View style={styles.fechaContenedor}>
              <DatePicker
                date={fecha}
                locale='es'
                onDateChange={(date) => setFecha(date)}
              />
            </View>
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Descripción</Text>
            <TextInput
              style={styles.input}
              placeholder='Descripción'
              placeholderTextColor={'#666'}
              multiline={true}
              numberOfLines={4}
              value={descripcion}
              onChangeText={setDescripcion}
            />
          </View>

          <Pressable
            style={styles.btnNuevaReporte}
            onPress={handleReporte}
          >
            <Text style={styles.btnNuevaReporteTexto}>{reporteObj.id ? 'Editar' : 'Agregar'} Reporte </Text> 
          </Pressable>


        </ScrollView>

      </View>

    </Modal>
  )
}

const styles = StyleSheet.create({
  titulo: {
    textAlign: 'center',
    fontSize: 35,
    fontWeight: '600',
    color: '#fff',
    marginTop: 30
  },
  container: {
    backgroundColor: '#048ABF',
    flex: 1
  },
  tituloBold: {
    fontWeight: '900',
    color: '#FFA800',// azul
    flex: 1

  },
  btnNuevoReporte: {
    backgroundColor: '#FFA800',
    padding: 15,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 10

  },
  btnTextoNuevoReporte: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: '900',
    textTransform: 'uppercase'
  },
  input: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 10
  },
  campo: {
    marginTop: 8,
    marginHorizontal: 30,
  },
  label: {
    color: '#FFF',
    marginBottom: 10,
    marginTop: 3,
    fontSize: 18,
    fontWeight: '600'
  },
  fechaContenedor: {
    backgroundColor: '#fff',

  },
  btnCancelar: {
    marginVertical: 20,
    backgroundColor: '#FFA800',
    marginHorizontal: 30,
    padding: 15,
    borderRadius: 10,
  },
  btnCancelarTexto: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  btnNuevaReporte: {
    marginVertical: 50,
    backgroundColor: '#F59E0B',
    paddingVertical: 15,
    marginHorizontal: 30,
    borderRadius: 10
  },
  btnNuevaReporteTexto: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 16,
    textTransform: 'uppercase',
  }
})

export default Formulario