import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import React from 'react';

export default function KeyboardAvoidRN() {
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'position'}>
      <View style={{height: 300, width: 300, backgroundColor: 'red'}}>
        <Text style={styles.text}>Hello</Text>
      </View>
      <Text style={styles.text}>Helloo</Text>
      <TextInput style={styles.input} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'black',
    width: 400,
    height: 50,
    margin: 10,
  },
  text: {
    fontSize: 58,
    alignSelf: 'center',
    margin: 20,
  },
});
