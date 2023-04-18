import {StyleSheet, Text, View, Switch} from 'react-native';
import React, {useState} from 'react';

export default function SwitchRN() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Switch</Text>
      <Switch
        onValueChange={toggleSwitch}
        trackColor={{false: '#767577', true: 'green'}}
        thumbColor={isEnabled ? 'blue' : '#f4f3f4'}
        value={isEnabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
