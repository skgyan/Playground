const print = async () => {
    setTimeout(() => {
        console.log("A");
    }, 0);
    console.log("B");
    setTimeout(console.log, 0, "C");
    queueMicrotask(() => {
        console.log("D");
    });
    // new Promise(() => console.log("E"));
    console.log("F");
    await new Promise((resolve) => {
        console.log("G");
        setTimeout(resolve, 10);
        console.log("H");
    });
    console.log("I");
}

print();

//B F D E G H A C
// microtask - D E
// macrotask - A C resolve