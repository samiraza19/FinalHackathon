import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const AddTasks = () => {
    const navigation = useNavigation()
    const Move = () =>{
      navigation.navigate('Add')
        } 
  const [taskName, setTaskName] = useState('');
  const [teamMembers, setTeamMembers] = useState([]);
  const [date, setDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showStartTimePicker, setShowStartTimePicker] = useState(false);
  const [showEndTimePicker, setShowEndTimePicker] = useState(false);
  const [selectedBoard, setSelectedBoard] = useState('Running');

  const team = [
    { name: 'Jeny', image: require('./path_to_image/jeny.jpg') },
    { name: 'mehrin', image: require('./path_to_image/mehrin.jpg') },
    { name: 'Avishek', image: require('./path_to_image/avishek.jpg') },
    { name: 'Jafor', image: require('./path_to_image/jafor.jpg') },
  ];

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const handleStartTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || startTime;
    setShowStartTimePicker(false);
    setStartTime(currentTime);
  };

  const handleEndTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || endTime;
    setShowEndTimePicker(false);
    setEndTime(currentTime);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Task</Text>

      <TextInput
        style={styles.input}
        placeholder="Task Name"
        value={taskName}
        onChangeText={setTaskName}
      />

      <View style={styles.teamContainer}>
        {team.map((member, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setTeamMembers([...teamMembers, member.name])}
            style={[
              styles.teamMember,
              teamMembers.includes(member.name) && styles.selectedMember,
            ]}
          >
            <Image source={member.image} style={styles.avatar} />
            <Text>{member.name}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => setShowDatePicker(true)}>
        <TextInput
          style={styles.input}
          placeholder="Date"
          value={date.toDateString()}
          editable={false}
        />
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}

      <TouchableOpacity onPress={() => setShowStartTimePicker(true)}>
        <TextInput
          style={styles.input}
          placeholder="Start Time"
          value={startTime.toLocaleTimeString()}
          editable={false}
        />
      </TouchableOpacity>

      {showStartTimePicker && (
        <DateTimePicker
          value={startTime}
          mode="time"
          display="default"
          onChange={handleStartTimeChange}
        />
      )}

      <TouchableOpacity onPress={() => setShowEndTimePicker(true)}>
        <TextInput
          style={styles.input}
          placeholder="End Time"
          value={endTime.toLocaleTimeString()}
          editable={false}
        />
      </TouchableOpacity>

      {showEndTimePicker && (
        <DateTimePicker
          value={endTime}
          mode="time"
          display="default"
          onChange={handleEndTimeChange}
        />
      )}

      <View style={styles.boardContainer}>
        {['Urgent', 'Running', 'ongoing'].map((board) => (
          <TouchableOpacity
            key={board}
            onPress={() => setSelectedBoard(board)}
            style={[
              styles.boardButton,
              selectedBoard === board && styles.selectedBoard,
            ]}
          >
            <Text>{board}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity onPress={Move} style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  teamContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  teamMember: {
    alignItems: 'center',
    marginRight: 10,
  },
  selectedMember: {
    borderColor: 'blue',
    borderWidth: 2,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    fontSize: 24,
    color: '#fff',
  },
  boardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  boardButton: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  selectedBoard: {
    backgroundColor: 'blue',
    color: '#fff',
  },
  saveButton: {
    backgroundColor: 'purple',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default AddTasks;
