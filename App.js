/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';

const App = () => {
  return (
    <View style={styles.appContainer}>
      <View>
        <TextInput placeholder="Your course Goal!" />
        <Button title="Add Goal" />
      </View>
      <View>
        <Text>List of Goals</Text>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
});
