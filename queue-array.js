class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }

  peek() {
    return this.queue[this.front];
  }

  size() {
    return this.rear - this.front;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log('queue1', queue);
console.log('dequeue', queue.dequeue());
console.log('queue2', queue);
console.log('queue.size();', queue.size());
console.log('peek', queue.peek());
console.log('dequeue', queue.dequeue());
console.log('dequeue', queue.dequeue());
console.log('queue3', queue);
