import React from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

export default function RoundedButton({
  onPress,
  label = 'Click me!',
  buttonStyle = styles.button,
  textStyle = styles.text
}) {
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{label}</Text>
    </TouchableOpacity>
  );
}

RoundedButton.propTypes = {
  onPress: React.PropTypes.func.isRequired,
  label: React.PropTypes.string,
  buttonStyle: React.PropTypes.any,
  textStyle: React.PropTypes.any,
};


const styles = StyleSheet.create({
  button: {
    width: 150,
    height: 75,
    backgroundColor: 'ivory',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  text: {
    color: 'white',
    fontSize: 12,
  },
});
