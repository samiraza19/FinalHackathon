import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Add = () => {




  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.openButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Open Modal</Text>
      </TouchableOpacity>
      {modalVisible && (
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity onPress={MoveToAddTask} style={styles.optionButton}>
              <Text style={styles.optionText}>Create Task</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={MoveToAddTask} style={styles.optionButton}>
              <Text style={styles.optionText}>Create Project</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={MoveToCreateTeam} style={styles.optionButton}>
              <Text style={styles.optionText}>Create Team</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={MoveToCreateTeam} style={styles.optionButton}>
              <Text style={styles.optionText}>Create Event</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeText}>X</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  openButton: {
    backgroundColor: '#6200ea',
    borderRadius: 25,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  optionButton: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  optionText: {
    color: '#000',
    fontWeight: 'bold',
  },
  closeButton: {
    backgroundColor: '#6200ea',
    borderRadius: 20,
    padding: 10,
    marginTop: 20,
  },
  closeText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Add;
