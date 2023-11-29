function makeDistinct(dials) {
    // Utilizar un conjunto para eliminar duplicados
    const digitSet = new Set(dials);

    if (digitSet.size === dials.length) {
        return "";
    } else {
        const aux = dials;
        let actions = "";
        for (let i = 0; i < dials.length; i++) {
            // console.log("dial:"+dials[i]);
            for (let j =  1; j < dials.length; j++) {
                if (i===j){
                    j++;
                }
                if (dials[i] === dials[j]) {
                    // console.log("dial i:"+dials[i]);
                    // console.log("dial j:"+dials[j]);
                    // console.log(i);
                    aux[j] = (dials[j] + 1) % 10; // Aumentar en uno
                }
                actions += ">".repeat(i);
                // console.log("acciones:" + actions);
                // Realizar las rotaciones necesarias para llegar al próximo dígito único
                const nextDigit = (dials[j] + 1) % 10;
                if (nextDigit > dials[j]) {
                    actions += "+".repeat(nextDigit - dials[j]);
                } else if (nextDigit < dials[j]) {
                    actions += "-".repeat(dials[j] - nextDigit);
                }
            }
        }

        // return aux;
        return actions;
    }

}

const digits0 = [3,2,7];
const digits1 = [1, 2, 3, 4, 5];
const digits2 = [8,8,0,9];
const digits3 = [0, 1, 0, 2,0];
console.log("digits0"+makeDistinct(digits0));
console.log("digits1"+makeDistinct(digits1));
console.log("digits2"+makeDistinct(digits2));
console.log("digits3"+makeDistinct(digits3));




