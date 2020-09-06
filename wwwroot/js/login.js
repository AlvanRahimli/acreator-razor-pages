$("#loginForm").submit((e) => {
    jsonData = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    axios({
        method: "post",
        url: "http://localhost:5000/auth/login",
        data: jsonData
    }).then((response) => {
        //console.log(response);
        window.localStorage.setItem("token", response.data.data.token);
        window.location.href = window.location.origin + "/admin";
    }).catch((error) => {
        console.error(error);
        alert("Səhv baş verdi.");
    });

    return false;
})