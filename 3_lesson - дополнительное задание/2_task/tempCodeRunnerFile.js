function foo(val) {
    let string = val.trim();
    if (typeof (string) != "string") {
        return "Передана не строка !";
    } else {
        return "Передана строка !";
    }
    console.log(string);
}