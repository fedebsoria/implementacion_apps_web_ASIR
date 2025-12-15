document.addEventListener('DOMContentLoaded', () => {
    const buttonCheckTemp = document.getElementById("check-temp-button");
    //messages for the output
    let resultMessages = ["Temperatura baja. Encendiendo calefacción.", 
        "Temperatura ideal. Sistema estable.", 
        "Temperatura alta. Activando ventilación.",
        "Alerta: temperatura excesiva. Activando enfriamiento máximo."];
    //imgs for the output
    let resultImg = ["img/img01.jpg", "img/img02.jpg", "img/img03.jpg","img/img04.jpg"];


    buttonCheckTemp.addEventListener("click", function(evento){
        //Refrain from charging an element and making the web reload
        evento.preventDefault();
        //Read current values and save them
        let temperatureUser = Number(document.getElementById("temperature").value);
        let temperatureImage = document.getElementById("temperature-img");
        let temperatureMessage = document.getElementById("temperature-message");

        //Logic: checks if the user is using numbers
        if (isNaN(temperatureUser)) {
            alert("Solo se aceptan números");
        } else {
            //Checks user temperature and gives feedback
            if (temperatureUser < 15){
                temperatureImage.src = resultImg[0];
                temperatureMessage.innerHTML = resultMessages[0];
            } else if (temperatureUser >= 15 && temperatureUser < 22) {
                temperatureImage.src = resultImg[1];
                temperatureMessage.innerHTML = resultMessages[1];
            } else if (temperatureUser >= 22 && temperatureUser <= 30) {
                temperatureImage.src = resultImg[2];
                temperatureMessage.innerHTML = resultMessages[2];
            } else if (temperatureUser > 30){
                temperatureImage.src = resultImg[3];
                temperatureMessage.innerHTML = resultMessages[3];
            } else {
                alert("Incorrecto");
            }
        }
    });
});