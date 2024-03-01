$(document).ready(function () {
    const c = $("#errorMsg");
    const username = window.localStorage.getItem("username");

    if (username) {
        $("#m-user").text("Hello " + username);
    }

    $("#l-button").click(function (e) {
        e.preventDefault();

        var username = $("#l-username").val();
        var password = $("#l-password").val();

        if (username == "" || password == "") {
            c.text("Please fill all the fields");
        } else {

            window.localStorage.setItem("username", username);

            window.location.href = "Main.html";
            $("#l-username, #l-password").val("");
        }
    });

    const checkoutButton = document.getElementById("checkout-button");
    const successMessage = document.getElementById("success-message");

    checkoutButton.addEventListener("click", () => {
        $("#selamat").text("Selamat " + username + ", transaksi Anda Berhasil!");
        successMessage.style.display = "block";
    });


});
