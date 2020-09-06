$("#cForm").submit((e) => {
    if (window.localStorage.getItem("token") == null) {
        alert("Login səhifəsinə yönləndiriləcəksiniz.");
        window.location.href = window.location.origin + "/login";
    }

    var form = new FormData();
    form.append("name", document.getElementById("name").value);
    form.append("price", parseInt($("#price").val()));
    form.append("type", parseInt(document.getElementById("type").value));
    form.append("width", parseInt(document.getElementById("width").value));
    form.append("height", parseInt(document.getElementById("height").value));
    form.append("image", document.getElementById("image").files[0]);

    axios.defaults.headers.post["Authorization"] = "Bearer " + window.localStorage.getItem("token");
    axios.defaults.headers.post["Content-Type"] = "multipart/form-data";

    axios.post("http://localhost:5000/products/new", form)
        .then((response) => {
            console.log(response);
            alert("Məhsul əlavə olundu.")
        }).catch((err) => {
            console.error(err);
            alert("Səhv baş verdi");
        });

    return false;
});

$("#deleteForm").submit((e) => {
    if (window.localStorage.getItem("token") == null) {
        alert("Login səhifəsinə yönləndiriləcəksiniz.");
        window.location.href = window.location.origin + "/login";
    }

    axios.defaults.headers.post["Authorization"] = "Bearer " + window.localStorage.getItem("token");

    axios.post("http://localhost:5000/products/delete/" + $("#pId").val())
        .then((response) => {
            console.log(response);
            alert("Məhsul silindi.")
        }).catch((err) => {
            console.error(err);
            alert("Səhv baş verdi");
        });

    return false;
})