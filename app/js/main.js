$(document).ready(function () {
    var $sample = $('.row');
    var $load = $('#load');



    $.ajax({
        dataType: "json",
        type: 'GET',
        url: 'js/sample.json',
        success: success
    });

    function success(data) {

        var result = "";
        $.each(data, function (i, data) {
            result += "<div class='col-md-3'>";
            result += "<div class='thumbnail text-center'>";
            result += "<p>Name :" + data.name + "</p>";
            result += "<p>Username :" + data.username + "</p>";
            result += "<p>Email :" + data.email + "</p>";
            result += "<p>Adress :" + data.address.street + "</p>";
            result += "<p>Phone :" + data.phone + "</p>";
            result += "<p>Website :" + data.website + "</p>";
            result += "<p>Company :" + data.company + "</p>";
            result += "<button class='btn btn-danger remove'>" + ' X ' + "</button>"
            result += "</div>"
            result += "</div>"
        });

        $sample.html(result);
        var btn = $('.remove');
        btn.on('click', deleteParent);

        function deleteParent() {

            $(this).parent().remove();
        }

    }



});
