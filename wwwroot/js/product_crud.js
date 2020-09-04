function newProduct() {
    var form = new FormData();

    form.append("name", document.getElementById("name").value);
    form.append("price", parseInt(document.getElementById("price").value));
    form.append("type", parseInt(document.getElementById("type").value));
    form.append("width", parseInt(document.getElementById("wid").value));
    form.append("height", parseInt(document.getElementById("hei").value));
    form.append("image", document.getElementById("img").files[0]);

    axios.defaults.headers.post["Authorization"] = "Bearer " + window.localStorage.getItem("token");
    axios.defaults.headers.post["Content-Type"] = "multipart/form-data";

    axios.post("http://localhost:5000/products/new",form)
    .then((response) => {
        console.log(response);
    }).catch((err) => {
        console.error(err);
    })
}

function logout() {
    window.localStorage.removeItem("token");
    window.location.href = window.location.origin;
}