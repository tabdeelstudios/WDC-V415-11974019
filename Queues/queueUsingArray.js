class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(value) {
    this.items.push(value);
  }

  isEmpty() {
    if (this.items.length == 0) {
      return true;
    } else {
      return false;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
    } else {
      return this.items.shift();
    }
  }

  print() {
    console.log("Queue contains : ");
    if (this.isEmpty()) {
      console.log("Queue is empty");
    } else {
      for (let index = 0; index < this.items.length; index++) {
        console.log(this.items[index] + " ");
      }
    }
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
