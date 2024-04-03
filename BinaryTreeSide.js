const makeTree = (nodes, i = 0) => {

console.log(nodes, i);
return (
  i >= nodes.length 
    ? null
    : {
        value: nodes [i] == -1 ? null : nodes [i], 
        left: makeTree (nodes, 2 * i + 1), 
        right: makeTree (nodes, 2 * i + 2)
      }
    );
}

const sumTree = (node) => node == null 
  ? 0 
  : (node.value || 0) + sumTree (node.left) + sumTree (node.right)

const largerHalf = (
  nodes = [], 
  tree = makeTree(nodes), 
  lSum = sumTree(tree.left), 
  rSum = sumTree(tree.right)
) => lSum > rSum ? 'Left' : rSum > lSum ? 'Right' : 'Equal'

const nodes = [1,4,100,5, 6,8,9,7,4,5,6]

console.log (largerHalf(nodes)) //=> 'Left'