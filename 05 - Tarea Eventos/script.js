document.addEventListener('DOMContentLoaded', () => {
    //consts for saving the data from the html form.
    const note1 = Number(document.getElementById("nota1").value);
    console.log(note1.value);
    const note2 = Number(document.getElementById("nota2").value);
    const note3 = Number(document.getElementById("nota3").value);

    const resultNoteNum = document.getElementById("promedio-nota");
    const resultNoteTXT = document.getElementById("resultado-nota");
    let resultNoteMessages = ["SUSPENSO", "APROBADO", "NOTABLE", "SOBRESALIENTE", "MATRÍCULA DE HONOR"];
    
    const botonPromediar = document.getElementById("promediar");
    const botonReset = document.getElementById("reset")

    botonPromediar.addEventListener("click", function(evento){
        //Refrain from charging an element and making the web reload
        evento.preventDefault();
        //Calculate and save the average note  
        let averageNote = (note1 + note2 + note3) / 3;
        const counter = Number(note1 < 5) + Number(note2 < 5) + Number(note3 <5) //this const checks if the note is < than 5 and if its turn True to 1. Counter should be 0 for passing.
        //console.log(counter) //for debbuging

        //Average note treatment
        //Print average note
        resultNoteNum.innerHTML = `Nota: ${averageNote.toPrecision(2)}`
        //Check average note and shows the correspond 'calificativo'
        if (averageNote < 5 || counter >= 2) {
            resultNoteTXT.innerHTML = resultNoteMessages[0];
        } else if (averageNote >= 5 && averageNote < 7 && counter == 0) {
            resultNoteTXT.innerHTML = resultNoteMessages[1];
        } else if (averageNote >= 7 && averageNote < 9 && counter == 0) {
            resultNoteTXT.innerHTML = resultNoteMessages[2];            
        } else if (averageNote >= 9 && averageNote < 10 && counter == 0) {
            resultNoteTXT.innerHTML = resultNoteMessages[3];
        } else if (averageNote == 10 && counter == 0) {
            resultNoteTXT.innerHTML = resultNoteMessages[4];
        }
        //ALERTS
        if (counter >= 2) {
            alert("Debe repetir el curso");
        } else if (note1 < 5 && note2 >= 5 && note3 >= 5){
            alert('Tiene la ASIGNATURA 1 pendiente ⚠ \n NO podrá hacer la práctica');
        } else if (note1 >= 5 && note2 < 5 && note3 >= 5){
            alert('Tiene la ASIGNATURA 2 pendiente ⚠ \n NO podrá hacer la práctica');
        } else if (note1 >= 5 && note2 >= 5 && note3 < 5){
            alert('Tiene la ASIGNATURA 3 pendiente ⚠ \n NO podrá hacer la práctica');
        } else {
            alert('Puede iniciar su periodo de prácticas! ✌');
        }
    }
    );
    botonReset.addEventListener("click", function(evento1){
        evento1.preventDefault();
        // clear input fields
        document.getElementById("nombre").value = "";
        document.getElementById("apellido1").value = "";
        document.getElementById("apellido2").value = "";
        document.getElementById("nota1").value = "";
        document.getElementById("nota2").value = "";
        document.getElementById("nota3").value = "";
        // clear results
        resultNoteNum.innerHTML = "";
        resultNoteTXT.innerHTML = "";
        // focus first field
        document.getElementById("nombre").focus();
    });
}); 