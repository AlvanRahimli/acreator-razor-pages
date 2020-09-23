function postImage() {

    var form = new FormData();

    var a = $("#imgType").val();
    form.append("alt", a);
    var b = document.getElementById("imgFile").files[0];
    form.append("imageFile", b);
    var c = parseInt($("#imgPurpose").val());
    form.append("purpose", c);

    axios.defaults.headers.post["Authorization"] = "Bearer " + window.localStorage.getItem("token");
    axios.defaults.headers.post["Content-Type"] = "multipart/form-data";

    axios.post("https://acreator.az/api/images/new", form)
        .then((response) => {
            console.log(response);
            alert("Şəkil əlavə olundu.");
            window.location.reload();
        })
        .catch((err) => {
            console.error(err);
            alert("Səhv baş verdi");
        });
}