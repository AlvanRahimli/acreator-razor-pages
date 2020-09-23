$("#contact-form").submit((e) => {

    let msgBody = {
        clientName: $("#clientName").val(),
        clientEmail: $("#clientEmail").val(),
        clientPhone: $("#clientPhone").val(),
        content: $("#msgContent").val()
    };

    axios.post("https://acreator.az/api/messages/new", msgBody)
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