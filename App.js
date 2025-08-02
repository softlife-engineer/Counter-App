import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity  } from 'react-native';
import React from 'react';

export default function App() {
  const [count, setCount] = React.useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.CountText}>Count:{count} </Text>

      <TouchableOpacity
        onPress={() => setCount(count + 1)}
        style={{
          marginBottom: 20,
          backgroundColor: "#4CAF50",
          padding: 10,
          borderRadius: 20,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 18 }}>Increase</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setCount(count - 1)}
        style={{
          marginBottom: 20,
          backgroundColor: "#4CAF50",
          padding: 10,
          borderRadius: 20,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 18 }}>Decrease</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        onPress={() => setCount(0)}
        style={{
          backgroundColor: "#f44336",
          padding: 10,
          borderRadius: 5,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 18 }}>Reset</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff6347',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  CountText: {
    color: "#fff",  
    fontSize: 20,
  }

});
