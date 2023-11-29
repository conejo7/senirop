
/** A string is called a palindrome if it reads the same forwards and backwards. E.g., "a",
 *  "noon" and "tacocat" are palindromes but "cocoa" isn't.
 A string is called a near-palindrome if we can rearrange its characters to make it a palindrome. For example, "aaa",
 "cocoa" and "xxyyzz" are near-palindromes but "abc" isn't.

 You are given a String S of lowercase English letters. You are allowed to perform a sequence of operations.
 In each operation you can choose an index into S and either increment or decrement the character at that index.
 (Incrementing 'a' turns it into 'b', incrementing 'b' gives 'c', ..., and if we increment 'z' we get 'a' again.
 Decrementing is the inverse operation.)
 Determine and return the smallest number of operations needed to turn S into a near-palindrome.

 Definition
 Class:	NearPalindromesDiv1
 Method:	Solve
 Parameters:	String
 Returns:	Int
 Method signature:	int solve(String S)
 (be sure your method is public)

 Constraints
 -	S will contain between 1 and 2,500 characters, inclusive.
 -	Each character of S will be a lowercase English letter ('a'-'z').

  
 Examples
 0)
 "cocoa"

 Returns: 0
 This is already a near-palindrome, no operations are needed.


 1)
 "daddy"

 Returns: 2
 One optimal solution is to increment S[4] twice, changing the input string into the near-palindrome "dadda".
 (The string "dadda" is a near-palindrome because we can rearrange its letters to get a palindrome.
 One of the palindromes we can obtain this way is "dadad".)


 2)
 "abcdefgh"
 Returns: 4

 */

function solve(cadenaP) {

    if (cadenaP.length < 1 || cadenaP.length > 2500) {
        throw new Error("La cadena S debe tener entre 1 y 2500 caracteres.");
    }
    cadenaP=cadenaP.toLowerCase();
    const lon = cadenaP.length;
    let operations = 0;

    for (let i = 0; i < (lon / 2); i++) {
        const inicio = cadenaP[i];
        const final = cadenaP[lon - 1 - i];
        const diff = Math.abs(final.charCodeAt(0) - inicio.charCodeAt(0));
        operations += Math.min(diff, 26 - diff);
        console.log("operations:"+operations);
    }
    if (operations<3) {
        return "This is already a near-palindrome";
    }

    return operations;

}
//const cadena = "daddy";
const cadenaPalindromo= "cocoasdfsdf";
//ejemplo:  abcdefgh
//de a hasta la h = 7
//de b hasta la g = 5
//de c hasta la f = 3
//de d hasta la e = 1
//suma  = 16
console.log("cocoa ->"+solve("cocoa"));
console.log("daddy ->"+solve("daddy"));
console.log("abcdefgh ->"+solve("abcdefgh"));



