$("#contact-form").submit((e) => {

    var msgBody = {
        clientName: $("#clientName").val(),
        clientEmail: $("#clientEmail").val(),
        clientPhone: $("#clientPhone").val(),
        content: $("#msgContent").val()
    };

    axios.post("http://localhost:5000/messages/new", msgBody)
        .then((response) => {
            console.log(response);
            alert("Sualınız qəbul olundu. Sizinlə əlaqə saxlanılacaq.");
        })
        .catch((err) => {
            console.error(err);
            alert("Səhv baş verdi.");
        });

    return false;
})