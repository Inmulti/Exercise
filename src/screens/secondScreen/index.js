import React from 'react';
import {Text, ScrollView} from 'react-native';
import data from '../../data/data'
import styles from './styles';

let treeAray = [];

const treeToArr = root => {
    let array = [];
    let stack = [];

    stack.push(root);
    while (stack.length !== 0) {
        let node = stack.pop();

        if (!node.level) {
            node.level = 0;
        }

        if (node.children.length === 0) {
            array.push({
                name: node.name,
                level: node.level,
            });
        } else {
            for (let i = node.children.length - 1; i >= 0; i--) {
                stack.push(node.children[i]);
                node.children[i].level = node.level + 1;
            }
            array.push({
                name: node.name,
                level: node.level,
            });
        }
    }
    return array;
};

const iterative = data => {
    let outputArr = treeToArr(data);

    for (let i = 0; i < outputArr.length; i++) {
        let output = '';
        for (let j = 0; j < outputArr[i].level; j++) {
            output += '-';
        }
        output += outputArr[i].name;
        treeAray.push(output)
    }
};

class SecondScreen extends React.Component {
  static navigationOptions = () => ({
    header: () => null,
  });

  state = {};

  async componentDidMount() {}

  render() {
    iterative(data);
    return (
      <ScrollView style={styles.container}>
      <Text style={styles.text}>Iterative</Text>
          {treeAray.map(key => {console.log('key', key); return(<Text style={styles.text}>{key}</Text>)})}
      </ScrollView>
    );
  }
}

export default SecondScreen;
