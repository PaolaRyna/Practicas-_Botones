import React from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { Center, Avatar, HStack, Text } from "native-base";

export const Tab2Screen = () => {


  return (
    <>
      <View style={styles.titulo}>
        <HStack justifyContent="space-between" space={"2xl"}>
          <Text fontSize="3xl" bold italic color='#048ABF' > Report on </Text>
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

      <ScrollView>
        <View style={{ flexDirection: 'row' }}>
          <Image
            style={styles.banner}
            source={require('../../assets/img/bg.jpg')}
          />
        </View>

        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Grupos</Text>
          <ScrollView
            horizontal          >
            <View>
              <Image
                style={styles.nota}
                source={require('../../assets/img/actividad1.jpg')} />
            </View>
            <View>
              <Image
                style={styles.nota}
                source={require('../../assets/img/actividad2.jpg')} />
            </View>
            <View>
              <Image
                style={styles.nota}
                source={require('../../assets/img/actividad3.jpg')} />
            </View>
            <View>
              <Image
                style={styles.nota}
                source={require('../../assets/img/actividad4.jpg')} />
            </View>
            <View>
              <Image
                style={styles.nota}
                source={require('../../assets/img/actividad5.jpg')} />
            </View>
          </ScrollView>

          <Text style={styles.titulo}>Pendientes</Text>
          <View>
            <View>
              <Image
                style={styles.mejores}
                source={require('../../assets/img/mejores1.jpg')} />
            </View>
            <View>
              <Image
                style={styles.mejores}
                source={require('../../assets/img/mejores2.jpg')} />
            </View>
            <View>
              <Image
                style={styles.mejores}
                source={require('../../assets/img/mejores3.jpg')} />
            </View>
          </View>
          <Text style={styles.titulo}>Avisos</Text>
          <View
            style={styles.listado}>
            <View style={styles.listadoItem}>
              <Image
                style={styles.mejores}
                source={require('../../assets/img/hospedaje1.jpg')} />
            </View>

            <Center>
            </Center>
            <View style={styles.listadoItem}>
              <Image
                style={styles.mejores}
                source={require('../../assets/img/hospedaje2.jpg')}
              />
            </View>
            <View style={styles.listadoItem}>
              <Image
                style={styles.mejores}
                source={require('../../assets/img/hospedaje3.jpg')}
              />
            </View>
            <View style={styles.listadoItem}>
              <Image
                style={styles.mejores}
                source={require('../../assets/img/hospedaje4.jpg')}
              />
            </View>
          </View>
          
        </View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  banner: {
    height: 200,
    flex: 1
  },
  titulo: {
    marginHorizontal: 5,
    marginVertical: 10,
  },
  contenedor: {
    marginHorizontal: 2
  },
  nota: {
    width: 200,
    height: 200,
    marginRight: 10
  },
  mejores: {
    width: '100%',
    height: 150,
    marginVertical: 5
  },
  listado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  listadoItem: {
    flexBasis: '49%'
  }, reporton: {
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
});
