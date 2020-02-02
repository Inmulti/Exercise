import React from 'react';
import {View, Text} from 'react-native';
// import PropTypes from 'prop-types';
import styles from './styles';

class MainScreen extends React.Component {
  static navigationOptions = () => ({
    header: () => null,
  });

  state = {data: 10};

  async componentDidMount() {}

  change = x => {
    this.setState({data: x * 10});
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Stuff Here</Text>
      </View>
    );
  }
}

// MainScreen.propTypes = {
//   navigation: PropTypes.object.isRequired,
// };

export default MainScreen;
