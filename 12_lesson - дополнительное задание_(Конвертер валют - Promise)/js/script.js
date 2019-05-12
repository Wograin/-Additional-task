let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    let data,
        request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    function currencyConverter() {
        let promise = new Promise(function (resolve, reject) {
            request.addEventListener('readystatechange', () => {
                if (request.readyState === 4) {
                    if (request.status == 200) {
                        resolve(JSON.parse(request.response));
                    } else {
                        reject();
                    }
                }
            });
        }); // end promise
        return promise;
    }
    currencyConverter()
        .then(() => data = JSON.parse(request.response))
        .then(() => inputUsd.value = inputRub.value / data.usd)
        .catch(() => inputUsd.value = "Что-то пошло не так!");
});

/*
inputRub.addEventListener('input', () => {
    let request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();
    
    request.addEventListener('readystatechange', function() {
        if (request.readyState === 4 && request.status == 200) {
            let data = JSON.parse(request.response);

            inputUsd.value = inputRub.value / data.usd;
        } else {
            inputUsd.value = "Что-то пошло не так!";
        }
    });

});
*/