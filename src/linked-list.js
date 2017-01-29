const Node = require('./node');

class LinkedList {
    constructor() {
      this.length = 0;
      this._tail = null;
      this._head = null;
      this._list = [];
    }

    append(data) {
      this.length += 1;
      if(this._tail === null && this._head === null) {
        const node = new Node(data, this._head, this._tail);
        this._tail = node;
        this._head = node;
        this._list.push(node.data);
      } else {
        const node = new Node(data, this._tail, null)
        this._tail.next = node;
        this._tail = node;
        this._list.push(node.data);
      }
      return this;
    }

    head() {
      if(this._head === null) {
        return null;
      }
      return this._head.data;
    }

    tail() {
      if(this._tail === null) {
        return null;
      }
      return this._tail.data;
    }

    at(index) {
      return this._list[index];
    }

    insertAt(index, data) {
      this._list[index] = data;
      return this;
    }

    isEmpty() {
      return this.length === 0;
    }

    clear() {
      this._tail = null;
      this._head = null;
      this.length = 0;
      this._list = [];
      return this;
    }

    deleteAt(index) {
      this._list.splice(index, 1);
      return this;
    }

    reverse() {
      const head = this._tail;
      const tail = this._head;
      this._head = head;
      this._tail = tail;
      this._list.reverse();
      return this;
    }

    indexOf(data) {
      return this._list.indexOf(data);
    }
}

module.exports = LinkedList;
