import React, { useState } from 'react';
import { HStack, Center, Text, Avatar, View, ScrollView } from "native-base";
import { KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity, Keyboard, } from 'react-native';
import Task from '../components/Task';

export const Tab3Screen = () => {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }
  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }

  return (
    <View>
      <View style={styles.tasksWrapper} >
        <HStack justifyContent="space-between" space={"lg"}>
          <Text fontSize="3xl" bold italic color='#048ABF' >Pendientes</Text>
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

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Pendintes de dia'} onChangeText={text => setTask(text)} />

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>

      </KeyboardAvoidingView>

      <View style={styles.itemsCol} >

        <ScrollView >
          <View style={styles.itemsCo} >
            <View style={styles.items}>
              {/* This is where the tasks will go! */}
              {
                taskItems.map((item, index) => {
                  return (
                    <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                      <Task text={item} />
                    </TouchableOpacity>
                  )
                })
              }
            </View>
          </View>

        </ScrollView>

      </View>

    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  items: {
    marginHorizontal: 40,
    marginVertical: 20

  },
  writeTaskWrapper: {
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 100

  },
  input: {

    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 50,
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 2,
  },
  addText: {
    fontSize: 20,
    justifyContent: 'center',
    borderColor: '#C0C0C0',
  },
  itemsCo: {
    marginTop: 50
  },
  itemsCol: {
    marginTop: 70
  },
});