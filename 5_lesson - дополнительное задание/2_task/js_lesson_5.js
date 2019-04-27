let dayOne = new Date();

function date(date) {

    let hours = date.getHours();
    if (hours < 10) {
        hours = "0" + hours;
    }

    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let seconds = date.getSeconds();
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    let day = date.getDate();
    if (day < 10) {
        day = "0" + day;
    }

    let month = date.getMonth();
    if (month < 10) {
        month = "0" + month;
    }

    let year = date.getFullYear();

    return (hours + ":" + minutes + ":" + seconds + " " + day + "." + month + "." + year);
}
//------------------------------------------------------------------------------------------------------------------------

let dayTwo = new Date(2018, 6, 1);

function newDate(date) {

    let day = date.getDate();
    if (day < 10) {
        day = "0" + day;
    }

    let month = date.getMonth();
    if (month < 10) {
        month = "0" + month;
    }

    let year = date.getFullYear();

    return (day + "." + month + "." + year);
}
//------------------------------------------------------------------------------------------------------------------------

let toDay = new Date(),
    formatter = new Intl.DateTimeFormat("ru", {
        weekday: "long"
    });
