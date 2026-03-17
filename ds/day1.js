const stringReverse = (str) => {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }   
    return reversed;
}
let str = 'Hello, World!';
let array = str.split('');
array[0] = 'h';
console.log(stringReverse('mazhar'))
//  The Task: Reverse a String "Under the Hood"If I give you the string const str = "Mazhar",
//   and I ask you to reverse it without using built-in high-level methods:
//   1. The Array Conversion: Since strings are immutable in JavaScript (you can't change a single character directly like str[0] = 'z'), what is the first step we must take with the memory to start swapping things?
//     2. The "Two-Pointer" Logic:Explain how you would use two "markers" (Left and Right) to swap characters.Where does the Left pointer start?Where does the Right pointer start?When do they stop moving?
//     3. The Space Complexity:If you create a brand new array to hold the reversed characters, how much extra memory are you using ($O(1)$ or $O(n)$)?
/*
1) We have to convert string to array using split('') and then we change the indices element directly
2)The left pointer should be placed at 0th index and right pointer at last index and swapping happens and we stop when left-pointer is < right-pointer
3)o(n)
 */