import _ from 'lodash';

const PATH_LEVEL = 0;

export const recursive = (data, array, level = PATH_LEVEL) => {
  let output = '';
  for (let i = 0; i < level; i++) {
    output += '-';
  }
  output += data.name;
  array.push(output);

  if (data.children) {
    for (let i = 0; i < data.children.length; i++) {
      recursive(data.children[i], array, level + 1);
    }
  }
};

export const addToData = (data, path, value) => {
  let flagDuplicate = false;
  if (path.length === 0) {
    if (data) {
      _.forEach(data, key => {
        flagDuplicate = value.valueOf() === key.name.valueOf();
        if (flagDuplicate === true) {
          return false;
        }
      });
    }
    if (flagDuplicate === false) {
      data.push({
        name: value,
        children: [],
      });
      return true;
    }
  }
  if (data.name === path[PATH_LEVEL]) {
    path.shift();
    addToData(data.children, path, value);
  } else {
    for (let i = 0; i < data.length; i++) {
      if (data[i].name === path[PATH_LEVEL]) {
        path.shift();
        addToData(data[i].children, path, value);
      }
    }
  }
  return false;
};

export const iterative = (data, array) => {
  let outputArr = treeToArr(data);

  for (let i = 0; i < outputArr.length; i++) {
    let output = '';
    for (let j = 0; j < outputArr[i].level; j++) {
      output += '-';
    }
    output += outputArr[i].name;
    array.push(output);
  }
};

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
