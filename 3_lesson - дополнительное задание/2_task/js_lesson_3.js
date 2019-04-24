function firstTask() {
    'use strict';
    let str = "урок-3-был слишком легким";

    let firstLetter = str.charAt(0).toUpperCase() + str.slice(1);
    console.log(firstLetter);
    let replacement = firstLetter.split("-").join(" ");
    console.log(replacement);
    let excision = replacement.indexOf("легким");
    console.log(excision);
    let scrap = replacement.substring(excision);
    console.log(scrap);
    let array = scrap.split("");
    console.log(array);
    let result = array.splice(4, 5, "о");
    console.log(array);
    let finish = array.join("");
    console.log(finish);

    //------------------------------------------------------------------------------------------------

    let arr = [20, 33, 1, "Человек", 2, 3];

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {

        if (typeof (arr[i]) != "string") {
            sum += arr[i] ** 3;
        }
    }

    console.log(Math.sqrt(sum));

    //------------------------------------------------------------------------------------------------

    function foo(val) {
        let string,
            maxLength = 50;
        if (val.length > maxLength) {
            return val.trim().slice(0, maxLength + 3) + "...";
        } else if (typeof (val) != "string") {
            alert("Передана не строка !");
        } else {
            return val.trim();
        }
        return val;
    }

    console.log(foo(" Если строка более 50 знаков - то после 50го символа часть текста скрывается и вместо них появляются три точки "));
    console.log(foo(" ку "));
    console.log(foo(1));

}

firstTask();