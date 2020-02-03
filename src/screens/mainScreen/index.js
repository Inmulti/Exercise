import React from 'react';
import {TextInput, Text, ScrollView} from 'react-native';
import data from '../../data/data'
import styles from './styles';

let treeAray = [];

const recursive = (data, level = 0) => {
  let output = '';
  for (let i = 0; i < level; i++) {
    output += '-';
  }
  output += data.name;
  treeAray.push(output);

  if (data.children) {
    for (let i = 0; i < data.children.length; i++) {
      recursive(data.children[i], level + 1);
    }
  }
};

const addToData = (data, path, value) => {
  if (path.length === 0) {
    data.push({
      name: value,
      children: [],
    });
    return true;
  }
  if (data.name === path[0]) {
    path.shift();
    addToData(data.children, path, value);
  } else {
    for (let i = 0; i < data.length; i++) {
      if (data[i].name === path[0]) {
        path.shift();
        addToData(data[i].children, path, value);
      }
    }
  }
  return false;
};

class MainScreen extends React.Component {
  static navigationOptions = () => ({
    header: () => null,
  });

  render() {
      recursive(data);
    return (
      <ScrollView style={styles.container}>
          <Text style={styles.text}>Recursive</Text>
          {treeAray.map(key => {console.log('key', key); return(<Text style={styles.text}>{key}</Text>)})}
      </ScrollView>
    );
  }
}

export default MainScreen;
