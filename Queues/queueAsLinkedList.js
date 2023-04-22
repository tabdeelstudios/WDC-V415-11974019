class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  enqueue(value) {
    let node = new Node(value);
    if (!this.front) {
      this.front = node;
      this.rear = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }
    this.size++;
  }

  dequeue() {
    if (!this.front) {
      return false;
    }
    let current = this.front;
    if (this.first == this.rear) {
      this.rear = null;
      this.front = null;
    }
    this.front = this.front.next;
    this.size--;
    return current.value;
  }

  print() {
    let current = this.front;
    let output = "";
    while (current) {
      output += current.value + ", ";
      current = current.next;
    }
    console.log(output);
  }
}

let myQueue = new Queue();

myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);
myQueue.enqueue(40);
myQueue.enqueue(50);
myQueue.print();
console.log(myQueue.dequeue() + " removed from Queue!");
console.log(myQueue.dequeue() + " removed from Queue!");
myQueue.print();

// Empty Queue
// Add 100
// Add 200
// Remove
// Add 300
// Add 400
// Remove
// Remove
