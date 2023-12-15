document.getElementById('showHideBtn').addEventListener('click', function() {
    var element = document.getElementById('hiddenElement');
    if (element.style.display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
});

Quagga.init({
    inputStream: {
        name: "Live",
        type: "LiveStream",
        target: document.querySelector('#interactive'),
        constraints: {
            width: 640,
            height: 480,
            facingMode: "environment", // or "user" for front camera
        },
    },
    decoder: {
        readers: ["ean_reader", "code_128_reader", "code_39_reader", "codabar_reader", "upc_reader"],
    },
}, function (err) {
    if (err) {
        console.error(err);
        return;
    }
    Quagga.start();
});


Quagga.onDetected(function (result) {
    var code = result.codeResult.code;
    document.getElementById('barcodeResult').value = code;
});
