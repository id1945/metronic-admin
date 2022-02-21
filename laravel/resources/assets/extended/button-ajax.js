$(document).on('click', '.button-ajax', function (e) {
    e.preventDefault();
    var action = $(this).data('action');
    var method = $(this).data('method');
    var csrf = $(this).data('csrf');
    var reload = $(this).data('reload');

    axios.request({
        url: action,
        method: method,
        data: {
            _token: csrf
        },
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
            if (reload) {
                window.location.reload();
            }
        });
});
