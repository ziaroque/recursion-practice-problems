class Node {
  constructor(value) {
    this.prev = null;
    this.value = value;
    this.next = null;
  }
}

const appendNodes = (node, value) => {
  if (node.next) {
    appendNodes(node.next, value);
  } else {
    node.next = new Node(value);
  }
};

const printNodes = (node, list = []) => {
  if (node.next) {
    printNodes(node.next, [...list, node.value]);
  } else {
    console.log([...list, node.value]);
  }
};

const createLinkedListFromArray = (list, node) => {
  if (list.length === 0) {
    return node;
  }
  if (!node) {
    return createLinkedListFromArray(list.splice(1), new Node(list[0]));
  } else {
    appendNodes(node, list[0]);
    return createLinkedListFromArray(list.splice(1), node);
  }
};

const head = new Node(1);
appendNodes(head, 2);
printNodes(head);
appendNodes(head, 3);
printNodes(head);
appendNodes(head, 4);
printNodes(head);
appendNodes(head, 5);
printNodes(head);
console.log('head:', head);

const list = [10, 20, 30, 40, 50, 60];
const newLinkedList = createLinkedListFromArray(list);
printNodes(newLinkedList);
console.log('newLinkedList:', newLinkedList);
