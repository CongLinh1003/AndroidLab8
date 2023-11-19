import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux';

import { store } from './store';


const initialState = {
  count: 0
}


export default function App() {
  return (
    <View style={styles.container}>
      <Pressable style={{ padding: 15, backgroundColor: 'black' }}
        onPress={() => {
          store.dispatch(initialState, { type: 'add' })
        }}>
        <Text style={{ color: 'white' }}>Add</Text>
      </Pressable>
      <Text>{initialState.count}</Text>
      <Pressable style={{ padding: 15, backgroundColor: 'black' }}
        onPress={() => {
          store.dispatch(initialState, { type: 'minus' })
        }}>
        <Text style={{ color: 'white' }}>minus</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
  },
});
