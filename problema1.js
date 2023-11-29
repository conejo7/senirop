
/** Write a program that prints the numbers from 1 to 100. For multiples of three,
* print the word “Senir” instead of the number. For multiples of five, print the word “Op” instead of the number.
*     For numbers which are multiples of both three and five, print “Senir Op” instead of the number.
*/

function obtenerNumeros() {
    for (let i = 1; i < 101; i++) {
        if (i%3==0 && i%5==0){
            console.log("Senir Op");
        }else if (i%5==0){
            console.log("Op");
        }else if (i%3==0){
            console.log("Senir");
        }else{
            console.log(i);
        }
    }
}

console.log("->"+obtenerNumeros());