import React, {memo} from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';

const goalItem = props => {
  return (
    <Pressable
      android_ripple={{color: '#220747'}}
      onPress={props.onDeleteItem.bind(this, props.id)}
      style={({pressed}) => pressed && styles.pressedItem}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
};

export default memo(goalItem);

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#407dff',
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: 'white',
    padding: 8,
  },
});
