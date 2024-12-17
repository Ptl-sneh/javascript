let username;

document.getElementById("mySubmit").onclick = function () {
    username = document.getElementById("name").value
    document.getElementById("h1").textContent = `Hello ${username}.`
}