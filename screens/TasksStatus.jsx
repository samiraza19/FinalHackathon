import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { PieChart } from 'react-native-svg-charts';
import Icon from 'react-native-vector-icons/Ionicons';

const TasksStatus = () => {
  const data = [
    {
      key: 1,
      amount: 35,
      svg: { fill: '#6CCFF6' },
    },
    {
      key: 2,
      amount: 30,
      svg: { fill: '#FFA41B' },
    },
    {
      key: 3,
      amount: 35,
      svg: { fill: '#7FB800' },
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Icon name="arrow-back" size={24} color="#000" />
        <Text style={styles.headerText}>Task Status</Text>
        <Icon name="settings" size={24} color="#000" />
      </View>

      <View style={styles.chartContainer}>
        <PieChart style={{ height: 200 }} data={data} innerRadius="70%" outerRadius="90%" />
        <View style={styles.chartTextContainer}>
          <Text style={styles.chartText}>65%</Text>
          <Text style={styles.chartSubText}>Complete</Text>
        </View>
      </View>

      <View style={styles.legendContainer}>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, { backgroundColor: '#6CCFF6' }]} />
          <Text style={styles.legendText}>To Do</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, { backgroundColor: '#FFA41B' }]} />
          <Text style={styles.legendText}>In Progress</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, { backgroundColor: '#7FB800' }]} />
          <Text style={styles.legendText}>Completed</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Monthly</Text>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Completed</Text>
          <Text style={styles.cardSubtitle}>18 Task now . 18 Task Completed</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>In Progress</Text>
          <Text style={styles.cardSubtitle}>2 Task now . 1 started</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>To Do</Text>
          <Text style={styles.cardSubtitle}>2 Task now . 1 Upcoming</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  chartContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  chartTextContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chartText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  chartSubText: {
    fontSize: 16,
    color: '#888',
  },
  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendColor: {
    width: 16,
    height: 16,
    marginRight: 8,
  },
  legendText: {
    fontSize: 14,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  card: {
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
    padding: 16,
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#888',
  },
});

export default TasksStatus;
