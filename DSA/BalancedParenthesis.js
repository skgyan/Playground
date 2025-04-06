// Balace parenthesis to check if an open parenthesis has right closing one and also in order
const BalancedParenthesis = (input) => {
    
    if(!input) return false;

    const stack = [];
    const pairs = {
        ')':'(', 
        '}':'{', 
        ']':'['
    };

    for (char of input) {
        // if opening one then push to stack
        if(char === '(' || char === '{' || char === '[') { 
            stack.push(char);
        } else if (pairs[char] && stack.pop() !== pairs[char]) { // if char exists in pairs and value corresponding to it's key is not same as popped one (last item pushed to stack)
            return false;
        }
    }

    return stack.length === 0;
}


console.log('Input => ', '', 'Output => ', BP(''));
console.log('Input => ', '()', 'Output => ', BP('()'));
console.log('Input => ', '({)', 'Output => ', BalancedParenthesis('({)'));
console.log('Input => ', '({})', 'Output => ', BalancedParenthesis('({})'));
console.log('Input => ', '({{[]}})', 'Output => ', BalancedParenthesis('({{[]}})'));
console.log('Input => ', '({{][}})', 'Output => ', BalancedParenthesis('({{][}})'));
console.log('Input => ', '({{({[([][])]})}})', 'Output => ', BalancedParenthesis('({{({[([][])]})}})'));
console.log('Input => ', '({{({[([]}{[])]})}})', 'Output => ', BalancedParenthesis('({{({[([]}{[])]})}})'));