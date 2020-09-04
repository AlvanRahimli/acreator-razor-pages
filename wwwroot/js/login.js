function setLocal(token) {
    window.localStorage.setItem("token", token);
}

function deleteLocal(key) {
    window.localStorage.removeItem(key);
}

function getLocal(key) {
    var token = window.localStorage.getItem(key);
    var tokenInput = document.getElementById("token");
    tokenInput.setAttribute("value", token);
}

function login() {
    // var form = new FormData();
    // form.append("email", document.getElementById("email").value);
    // form.append("password", document.getElementById("password").value);

    axios.defaults.headers.post["Content-Type"] = "application/json";

    axios.post("http://localhost:5000/auth/login", {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    }).then((response) => {
            console.log(response);
            alert("LOGGED IN");
            // localStorage.setItem("token", response.data.data.token);
            // document.getElementById("status").innerText += "UNDU!";
            // window.location.href = window.location.origin + "/admin";
    }).catch((err) => {
        console.error(err);
        alert("INVALID CREDS");
    });
}