import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  ScrollView,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';

const Discount = () => {
  const {height, width, scale, fontScale} = useWindowDimensions();

  const [value, setValue] = useState(0);
  const [disc, setDisc] = useState(0);
  const [final, setFinal] = useState(0);
  const [saved, setSaved] = useState(0);
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [valueError, setValueError] = useState(null);
  const [discError, setDiscError] = useState(null);

  const handleData = (final, saved) => {
    if (final != 0) {
      setData([
        ...data,
        {
          key: Math.random().toString(),
          field1: final,
          field2: saved,
        },
      ]);
    }
  };

  const handleValidateValue = value => {
    if (isNaN(value)) {
      setValueError('Please enter a valid integer');
      setValue(0);
    } else {
      setValueError(null);

      handleValidateDisc(disc);
    }
  };

  const handleValidateDisc = disc => {
    if (isNaN(disc)) {
      setDiscError('Please enter a valid integer between 0 and 100');
      setDisc(0);
    } else if (disc < 0 || disc > 100) {
      setDiscError('Discount must be between 0 and 100');
      setDisc(0);
    } else {
      setDiscError(null);
      setSaved((disc * value) / 100);
      setFinal(value - (disc * value) / 100);
      console.log(final);
      setCount(2);
      handleData(final, saved);
      Keyboard.dismiss();
    }
  };

  return (
    <View style={styles.parent}>
      <View
        style={{
          width: width,
          height: 75,
          backgroundColor: '#393E46',
          justifyContent: 'center',
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 36,
            textAlign: 'center',
            marginTop: 5,
            alignSelf: 'center',
          }}>
          Discount App
        </Text>
      </View>
      <View>
        <Text
          style={{
            color: '#393E46',
            fontSize: 24,
            textAlign: 'center',
            marginTop: 10,
          }}>
          Enter Amount
        </Text>
        <TextInput
          value={value}
          onChangeText={text => {
            setValue(text);
          }}
          keyboardType="numeric"
          style={{
            backgroundColor: '#EEEEEE',
            width: width * 0.8,
            height: 40,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#393E46',
            marginLeft: 40,
            color: '#393E46',
          }}
          placeholder="Enter amount"
          placeholderTextColor={valueError ? 'red' : '#393E46'}
        />
        {valueError && (
          <Text style={{fontSize: 16, color: 'red', marginLeft: width * 0.1}}>
            {valueError}
          </Text>
        )}
      </View>
      <View>
        <Text
          style={{
            color: '#393E46',
            fontSize: 24,
            textAlign: 'center',
            marginTop: 10,
          }}>
          Enter Discount
        </Text>
        <TextInput
          value={disc}
          onChangeText={text => {
            setDisc(text);
          }}
          keyboardType="numeric"
          style={{
            backgroundColor: '#EEEEEE',
            width: width * 0.8,
            height: 40,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#393E46',
            marginLeft: 40,
            color: '#393E46',
          }}
          placeholder="Enter discount in percentages"
          placeholderTextColor="#393E46"
        />

        {discError && (
          <Text style={{fontSize: 16, color: 'red', marginLeft: width * 0.1}}>
            {discError}
          </Text>
        )}
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            width: width * 0.5,
            height: 50,
            marginTop: 20,
            backgroundColor: '#393E46',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            handleValidateValue(value);

            // setValue(0);
            // setDisc(0);
            // }
          }}>
          <Text
            style={{
              fontSize: 28,
              color: 'white',
              textAlign: 'center',
            }}>
            Calculate
          </Text>
        </TouchableOpacity>
      </View>
      {final != 0 && valueError == null && discError == null && (
        <View
          style={{
            height: height * 0.2,
            width: width * 0.85,
            backgroundColor: '#393E46',
            alignSelf: 'center',
            borderRadius: 30,
            marginTop: 10,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              textAlign: 'left',
              marginLeft: 20,
              marginTop: 25,
            }}>
            Final amount after discount: {final}
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              textAlign: 'left',
              marginTop: 25,
              marginLeft: 20,
            }}>
            Total discount: {value - final}
          </Text>
        </View>
      )}
      {final != 0 && (
        <View
          style={{
            height: height * 0.25,
            width: width * 0.85,
            backgroundColor: '#393E46',
            alignSelf: 'center',
            borderRadius: 30,
            marginTop: 10,
          }}>
          <View style={{margin: 5}}>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                alignSelf: 'center',
              }}>
              History
            </Text>
            <ScrollView>
              {data.map(data => (
                <Text
                  style={{
                    color: 'white',
                    fontSize: 16,
                    textAlign: 'left',
                    marginTop: 0,
                    marginLeft: 20,
                  }}
                  key={data.key}>
                  Final Amount: {data.field1}, You saved: {data.field2}
                </Text>
              ))}
            </ScrollView>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
});

export default Discount;
