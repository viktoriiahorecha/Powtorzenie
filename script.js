function formularz() {
    let imie = document.getElementById("imie");
    let email = document.getElementById("email").value.toLowerCase();
    let telefon = document.getElementById("telefon");
    let option = document.getElementById("option");
    let wynik = document.getElementById("wynik");
    wynik.innerHTML = imie.value + "<br\> " + email + "<br/>" + telefon.value
}