

function berechne() {
    // Get the values of the salary inputs
    let lohn1 = parseFloat(document.getElementById('lohn1').value) || 0;
    let lohn2 = parseFloat(document.getElementById('lohn2').value) || 0;

    // Calculate the total salary
    let totalLohn = lohn1 + lohn2;

   
    // Calculate the total fixed costs
    let kostenInputs = document.querySelectorAll('#fixekosten > div > input[type="number"]');
    let totalFixeKosten = 0;

    // Loop through each input and add their values
    kostenInputs.forEach(function(input) {
        totalFixeKosten += parseFloat(input.value) || 0;
    });


    // Get the values of all the additional input fields with the class 'rechnung' and 'bezeichnung'
    let rechnungen = document.getElementsByClassName('rechnung');
    let bezeichnungen = document.getElementsByClassName('bezeichnung');
    let totalRechnungen = 0;

    // Loop through each rechnung input and sum their values
    for (let i = 0; i < rechnungen.length; i++) {
        totalRechnungen += parseFloat(rechnungen[i].value) || 0;
    }

    // Calculate the final result (total salary - total bills)
    let resultat = totalLohn - totalRechnungen - totalFixeKosten;

    // Display the result in the 'total' input field
    document.getElementById('total').value = resultat;
}

// Funktion zum Hinzufügen eines neuen Rechnungsfelds
function addNewRechnungField() {
    let container = document.getElementById('rechnungen-container');
    let divElement = document.createElement('div');
    
    let newInputRechnung = document.createElement('input');
    newInputRechnung.placeholder = 'Kosten'
    newInputRechnung.type = 'number';
    newInputRechnung.className = 'rechnung';
    
    let newInputBezeichnung = document.createElement('input');
    newInputBezeichnung.placeholder = 'Bezeichnung';
    newInputBezeichnung.type = 'text';
    newInputBezeichnung.className = 'bezeichnung';
    
    divElement.appendChild(newInputRechnung);
    divElement.appendChild(newInputBezeichnung);
    //divElement.appendChild(document.createElement('br'));
    
    container.appendChild(divElement);
}

function split(){
    let totalrechnungen = parseFloat(document.getElementById("total").value) || 0;

    let split = totalrechnungen / 2;

    document.getElementById('Anteil1').value = split;
    document.getElementById('Anteil2').value = split;
    console.log(split)
}

// Rufe die Funktion zum Hinzufügen eines neuen Rechnungsfelds auf, wenn die Seite geladen wird
window.onload = function() {
    addNewRechnungField();
}

