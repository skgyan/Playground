class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const reverseLinkedList = (head) => {
    let prev = null;
    let current = head;

    while (current !== null) {
        // Store the next node
        let next = current.next;

        // Reverse the current node's pointer
        current.next = prev;

        // Move pointers one step forward
        prev = current;
        current = next;
    }

    // At the end, prev will be the new head of the reversed list
    return prev;
};

// Helper function to print the linked list
const printList = (head) => {
    let current = head;
    const result = [];
    while (current !== null) {
        result.push(current.value);
        current = current.next;
    }
    console.log(result.join(" -> "));
};

// Example Usage
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);

console.log("Original list:");
printList(head);

head = reverseLinkedList(head);

console.log("Reversed list:");
printList(head);
