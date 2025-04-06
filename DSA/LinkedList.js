class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(value) {
        // create a new node using passed value
        const newNode = new Node(value);

        // check if list is empty
        if(!this.head) {
            this.head = newNode; // assign head to newNode
        } else {
            //find last node
            let current = this.head;

            // iterate until last node
            // current.next should be null
            while(current.next) {
                current = current.next;
            }

            current.next = newNode;
        }

        this.size++;
    }

    //to add new node in the begining
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    remove(value) {
        if(!this.head) return;

        if(this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return;
        }

        let current = this.head;

        while(current.next && current.next.value !== value) {
            current = current.next;
        }

        if(current.next) {
            current.next = current.next.next;
            this.size--;
        }
    }


    printLinkList() {
        let current = this.head;

        const values = [];

        while(current) {
            values.push(current.value);
            current = current.next;
        }

        console.log(values.join('->'));
    }
}

const list = new LinkedList();

// Adding nodes to the list
list.append(10);
list.append(20);
list.append(30);
list.prepend(5);

console.log("Linked List:");
list.printLinkList();  // Output: 5 -> 10 -> 20 -> 30

// Removing a node
list.remove(20);
console.log("After removing 20:");
list.printLinkList();  // Output: 5 -> 10 -> 30
