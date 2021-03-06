import React from 'react';
import {Text, ScrollView, Alert} from 'react-native';
import {recursive, addToData} from '../../utils/treeFormatHelpers';
import AddNewValue from '../../components/addNewValue';
import rawData from '../../data/data';
import styles from './styles';

class MainScreen extends React.Component {
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
    recursive(data, treeArray);
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
      recursive(data, treeArray);
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

  changeInput = input => {
    this.setState({input: text});
  };

  render() {
    const {input, viewTreeArray} = this.state;
    return (
      <ScrollView style={styles.container}>
        <AddNewValue
          onChangeText={text => this.setState({input})}
          onPress={() => this.addToTree(input)}
        />
        <Text style={styles.title}>Recursive</Text>
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

export default MainScreen;
