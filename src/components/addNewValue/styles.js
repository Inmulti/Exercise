import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  addField: {
    marginTop: 15,
    width: Dimensions.get('window').width,
  },
  input: {
    height: 45,
    borderColor: 'gray',
    borderWidth: 1,
    fontSize: 20,
    textAlign: 'center',
    color: 'limegreen',
  },
  button: {
    backgroundColor: 'limegreen',
    color: 'black',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '800',
    color: 'black',
  },
});
