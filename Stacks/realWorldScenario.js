class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  insert(value) {
    let node = new Node(value);
    node.next = this.top;
    this.top = node;
    this.size++;
  }

  remove() {
    let current = this.top;
    this.top = this.top.next;
    this.size--;
    return current.value;
  }

  peek() {
    return this.top.value;
  }

  print() {
    let current = this.top;
    let output = "";
    while (current) {
      output += current.value + ", ";
      current = current.next;
    }
    console.log(output);
  }
}

let myStack = new Stack();

function submitReview(event) {
  event.preventDefault();
  myStack.insert({
    name: document.getElementById("username").value,
    review: document.getElementById("review").value,
  });
  console.log(myStack);
}

function deleteReview() {
  myStack.remove();
  console.log("After deletion : ");
  console.log(myStack);
}

var form = document.getElementById("reviewForm");

form.addEventListener("submit", submitReview, true);
