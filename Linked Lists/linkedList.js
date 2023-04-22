class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MyList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(value) {
    let node = new Node(value);
    let current;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  printList() {
    let current = this.head;
    let output = "";
    while (current) {
      output += current.value + ", ";
      current = current.next;
    }
    console.log(output);
  }
}

let myList = new MyList();

myList.add(10);
myList.printList();
myList.add(110);
myList.printList();
myList.add(310);
myList.printList();
