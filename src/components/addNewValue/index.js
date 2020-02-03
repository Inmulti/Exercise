import React from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const AddNewValue = props => {
  const {onPress} = props;
  return (
    <View style={styles.addField}>
      <TextInput
        autoCorrect={false}
        style={styles.input}
        placeholder={'Example: Tree News Value'}
        placeholderTextColor={'limegreen'}
        {...props}
      />
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Add to tree</Text>
      </TouchableOpacity>
    </View>
  );
};

AddNewValue.propTypes = {
  nPress: PropTypes.func,
};

export default AddNewValue;
