import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Appbar, Button } from 'react-native-paper';
import { Calendar } from 'react-native-calendars';

export default function MonthlyTasks() {
  return (
    <ScrollView style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title="Monthly Task" />
      </Appbar.Header>

      <View style={styles.headerContainer}>
        <Text style={styles.dateText}>September, 12 ✏️</Text>
        <Text style={styles.taskCount}>15 tasks today</Text>
      </View>

      <ScrollView horizontal style={styles.weekContainer}>
        {['11', '12', '13', '14', '15', '16', '17'].map((day, index) => (
          <View
            key={index}
            style={[
              styles.dayContainer,
              index === 1 && styles.selectedDayContainer,
            ]}
          >
            <Text
              style={[
                styles.dayText,
                index === 1 && styles.selectedDayText,
              ]}
            >
              {day} Thu
            </Text>
          </View>
        ))}
      </ScrollView>

      <Calendar
        current={'2021-09-12'}
        markedDates={{
          '2021-09-03': { marked: true },
          '2021-09-12': { marked: true, selected: true },
          '2021-09-27': { marked: true },
        }}
        theme={{
          selectedDayBackgroundColor: '#6200ee',
          todayTextColor: '#6200ee',
        }}
      />

      <View style={styles.addButtonContainer}>
        <Button icon="plus" mode="contained" onPress={() => {}}>
          Add Task
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    padding: 20,
    alignItems: 'center',
  },
  dateText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  taskCount: {
    fontSize: 16,
    color: 'gray',
  },
  weekContainer: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  dayContainer: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
    marginHorizontal: 5,
  },
  selectedDayContainer: {
    backgroundColor: '#6200ee',
  },
  dayText: {
    fontSize: 18,
  },
  selectedDayText: {
    color: '#fff',
  },
  addButtonContainer: {
    padding: 20,
    alignItems: 'center',
  },
});
 