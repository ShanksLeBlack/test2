function redirigerVersConnexion() {
    // Vous pouvez remplacer "page_suivante.html" par le nom de votre fichier HTML cible
    window.location.href = "connexion.html";
}

let baliseAcceuilFacebook = document.getElementById("facebook")
baliseAcceuilFacebook.href = "https://www.facebook.com/"
baliseAcceuilFacebook.classList.add("stringBleu","stringGrand")
baliseAcceuilFacebook.classList.remove("stringGrand")

let nouvelElement = document.createElement("p")
let parentElement = document.querySelector("footer")
parentElement.appendChild(nouvelElement)