import React from 'react';
import {View, Text} from 'react-native';
// import PropTypes from 'prop-types';
import styles from './styles';

class SecondScreen extends React.Component {
  static navigationOptions = () => ({
    header: () => null,
  });

  state = {};

  async componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Stuff Here AGAIN</Text>
      </View>
    );
  }
}

// SecondScreen.propTypes = {
//   navigation: PropTypes.object.isRequired,
// };

export default SecondScreen;
