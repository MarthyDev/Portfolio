function copierAdresseEmail(email) {
    var element = document.createElement('textarea');
    element.value = email;
    document.body.appendChild(element);
    element.select();
    document.execCommand('copy');
    document.body.removeChild(element);
    alert('Adresse e-mail copiée : ' + email);
}