import React from 'react';
import {Text, ScrollView, Alert} from 'react-native';
import {iterative, addToData} from '../../utils/treeFormatHelpers';
import AddNewValue from '../../components/addNewValue';
import rawData from '../../data/data';
import styles from './styles';

class SecondScreen extends React.Component {
  static navigationOptions = () => ({
    header: () => null,
  });

  state = {
    input: undefined,
    data: rawData,
    viewTreeArray: [],
  };

  componentDidMount() {
    this.renderTree();
  }

  renderTree = () => {
    const {data} = this.state;
    let treeArray = [];
    iterative(data, treeArray);
    this.setState({viewTreeArray: treeArray});
  };

  addToTree = inputValue => {
    try {
      const {data} = this.state;
      let treeArray = [];
      // Split inputValue to array
      let newNode = inputValue.split(' ');
      const newValue = newNode.pop();
      addToData(data, newNode, newValue);
      iterative(data, treeArray);
      this.setState({viewTreeArray: treeArray});
    } catch (e) {
      if (inputValue === undefined || '') {
        Alert.alert('Error', 'Input is empty');
      } else {
        Alert.alert(
          'Error',
          'Value already exist at this level or this path does not exist',
        );
      }
    }
  };

  render() {
    const {input, viewTreeArray} = this.state;
    return (
      <ScrollView style={styles.container}>
        <AddNewValue
          onChangeText={text => this.setState({input: text})}
          onPress={() => this.addToTree(input)}
        />
        <Text style={styles.title}>Iterative</Text>
        {viewTreeArray.map((key, index) => {
          return (
            <Text key={key + index} style={styles.text}>
              {key}
            </Text>
          );
        })}
      </ScrollView>
    );
  }
}

export default SecondScreen;
