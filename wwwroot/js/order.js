function postOrder() {

    var form = new FormData();

    form.append("productId", parseInt($("#productId").val()));
    form.append("area", parseInt($("#area").val()));
    form.append("finalPrice", parseInt($("#area").val()) * parseInt($("#price").val()));
    form.append("contact", $("#contact").val());
    form.append("details", $("#details").val());

    axios.post("http://localhost:5000/orders/new", form)
        .then((response) => {
            console.log(response);
            alert("Sifariş qeydə alındı.");
            $("#orderButton").html = "Sifariş olunub";
        })
        .catch((err) => {
            console.error(err);
            alert("Səhv baş verdi");
        })
}