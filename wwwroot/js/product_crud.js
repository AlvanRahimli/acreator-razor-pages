﻿$("#cForm").submit((e) => {
    if (window.localStorage.getItem("token") == null) {
        alert("Login səhifəsinə yönləndiriləcəksiniz.");
        window.location.href = window.location.origin + "/login";
    }

    var form = new FormData();
    form.append("name", document.getElementById("name").value);
    form.append("price", parseInt($("#price").val()));
    form.append("type", parseInt(document.getElementById("type").value));
    form.append("color", document.getElementById("color").value);
    form.append("desc", document.getElementById("desc").value);
    form.append("width", parseInt(document.getElementById("width").value));
    form.append("height", parseInt(document.getElementById("height").value));
    form.append("image", document.getElementById("image").files[0]);

    axios.defaults.headers.post["Authorization"] = "Bearer " + window.localStorage.getItem("token");
    axios.defaults.headers.post["Content-Type"] = "multipart/form-data";

    axios.post("https://acreator.az/api/products/new", form)
    // axios.post("http://localhost:5000/products/new", form)
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

    axios.post("https://acreator.az/api/products/delete/" + $("#pId").val())
        .then((response) => {
            console.log(response);
            alert("Məhsul silindi.")
        }).catch((err) => {
            console.error(err);
            alert("Səhv baş verdi");
        });

    return false;
})

function changeStatus(id, status) {
    axios.defaults.headers.post["Authorization"] = "Bearer " + window.localStorage.getItem("token");

    axios.post('https://acreator.az/api/orders/set-status/' + id + '?status=' + status)
        .then((response) => {
            alert("Sifarişin statusu yeniləndi.");
            window.location.reload();
            console.log(response);
        })
        .catch((err) => {
            alert("Səhv baş verdi");
            window.location.reload();
            console.log(err);
        });
}

function changeMsgStatus(id, status) {
    axios.defaults.headers.post["Authorization"] = "Bearer " + window.localStorage.getItem("token");

    axios.post('https://acreator.az/api/messages/set-status/' + id + '?status=' + status)
        .then((response) => {
            alert("Sualın statusu yeniləndi.");
            window.location.reload();
            console.log(response);
        })
        .catch((err) => {
            alert("Səhv baş verdi");
            window.location.reload();
            console.log(err);
        });
}

function logout() {
    window.localStorage.removeItem("token");
    window.location.href = "/";
}

function filter(status) {
    window.location.href = window.location.origin + "/admin/orders/" + status;
}

function filterMsgs(status) {
    window.location.href = window.location.origin + "/admin/messages/" + status;
}

function filterImgs(status) {
    window.location.href = window.location.origin + "/admin/images/" + status;
}
